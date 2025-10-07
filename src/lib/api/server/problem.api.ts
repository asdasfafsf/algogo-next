import { notFound } from 'next/navigation';
import { getProblem as getProblemPure } from '../pure/problem.api';
import { retryAsync, isNotFoundError } from '@/lib/utils/retry';
import { Problem } from '@/types/problem.type';
import { ApiResponse } from '@/types/api.type';

/**
 * 서버 컴포넌트용 Problem 조회
 * - 404: notFound() 호출
 * - 네트워크 오류: 즉시 재시도
 * - 5xx 오류: 백오프 재시도
 */
export const getProblem = async (problemUuid: string): Promise<ApiResponse<Problem>> => {
  try {
    return await retryAsync(() => getProblemPure(problemUuid), 3);
  } catch (error) {
    if (isNotFoundError(error)) {
      notFound();
    }
    throw new Error('문제를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.');
  }
};
