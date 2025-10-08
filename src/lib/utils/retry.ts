type RetryStrategy = {
  shouldRetry: boolean;
  delay: number;
  useBackoff: boolean;
}

/**
 * 네트워크 에러인지 확인
 */
function isNetworkError(error: unknown): boolean {
  if (error && typeof error === 'object' && 'code' in error) {
    const code = (error as { code?: string }).code;
    return [
      'ECONNREFUSED',
      'ETIMEDOUT',
      'ENOTFOUND',
      'ENETUNREACH',
      'ECONNRESET'
    ].includes(code || '');
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return (error as { message?: string }).message === 'Network Error';
  }

  return false;
}

/**
 * HTTP 상태 코드 추출
 */
function getStatusCode(error: unknown): number | undefined {
  if (error && typeof error === 'object' && 'response' in error) {
    const response = (error as { response?: { status?: number } }).response;
    return response?.status;
  }
  return undefined;
}

/**
 * Retry-After 헤더 값 추출 (ms 단위)
 * RFC 7231: 초 단위 숫자 또는 HTTP 날짜 형식 지원
 */
function getRetryAfter(error: unknown): number | undefined {
  if (error && typeof error === 'object' && 'response' in error) {
    const response = (error as { response?: { headers?: { 'retry-after'?: string } } }).response;
    const retryAfter = response?.headers?.['retry-after'];

    if (retryAfter) {
      const seconds = parseInt(retryAfter, 10);
      if (!isNaN(seconds)) {
        return seconds * 1000;
      }

      const date = new Date(retryAfter);
      if (!isNaN(date.getTime())) {
        return Math.max(0, date.getTime() - Date.now());
      }
    }
  }
  return undefined;
}

/**
 * 에러가 404인지 확인
 */
export function isNotFoundError(error: unknown): boolean {
  return getStatusCode(error) === 404;
}

/**
 * 오류 유형별 재시도 전략 결정
 */
export function getRetryStrategy(error: unknown): RetryStrategy {
  if (isNetworkError(error)) {
    return { shouldRetry: true, delay: 0, useBackoff: false };
  }

  const statusCode = getStatusCode(error);

  if (statusCode === 429) {
    const retryAfter = getRetryAfter(error) || 2000;
    return { shouldRetry: true, delay: retryAfter, useBackoff: false };
  }

  if (statusCode && statusCode >= 500 && statusCode < 600) {
    return { shouldRetry: true, delay: 500, useBackoff: true };
  }

  return { shouldRetry: false, delay: 0, useBackoff: false };
}

/**
 * 네트워크 요청을 재시도하는 유틸 함수
 * @param fn 실행할 비동기 함수
 * @param maxRetries 최대 재시도 횟수 (기본 3회)
 */
export async function retryAsync<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      const strategy = getRetryStrategy(error);

      if (!strategy.shouldRetry || attempt >= maxRetries) {
        throw error;
      }

      if (strategy.delay > 0) {
        const currentDelay = strategy.useBackoff
          ? strategy.delay * Math.pow(2, attempt)
          : strategy.delay;

        console.warn(`재시도 ${attempt + 1}/${maxRetries}: ${currentDelay}ms 후 재시도...`);
        await new Promise(resolve => setTimeout(resolve, currentDelay));
      } else {
        console.warn(`재시도 ${attempt + 1}/${maxRetries}: 즉시 재시도...`);
      }
    }
  }

  throw lastError;
}
