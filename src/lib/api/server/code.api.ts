import { getSetting as getSettingPure, loadCode as loadCodePure } from '../pure/code.api';
import { retryAsync } from '@/lib/utils/retry';
import { DEFAULT_LANGUAGE } from '@/constants/code.constant';
import { getDefaultTemplate } from '@/constants/code-template.constant';
import { Language } from '@/types/language.type';
import { ApiResponse } from '@/types/api.type';
import { Code, CodeSetting } from '@/types/code-template.type';

/**
 * 서버 컴포넌트용 Setting 조회
 * - 모든 오류: 기본값 반환
 * - 자동 재시도 (네트워크/5xx)
 */
export const getSetting = async (): Promise<ApiResponse<CodeSetting>> => {
  try {
    return await retryAsync(() => getSettingPure(), 3);
  } catch (error) {
    console.warn('설정을 불러오지 못해 기본값을 사용합니다:', DEFAULT_LANGUAGE);
    return {
      statusCode: 200,
      errorCode: '0000',
      errorMessage: 'Using default setting',
      data: {
        defaultLanguage: DEFAULT_LANGUAGE,
        fontSize: 14,
        tabSize: 4,
        theme: 'vs-dark',
        lineNumber: 'on',
        problemContentRate: 50,
      }
    };
  }
};

/**
 * 서버 컴포넌트용 Code 조회
 * - 모든 오류: 기본 템플릿 반환
 * - 자동 재시도 (네트워크/5xx)
 */
export const loadCode = async (problemUuid: string, language: Language): Promise<ApiResponse<Code>> => {
  try {
    return await retryAsync(() => loadCodePure(problemUuid, language), 3);
  } catch (error) {
    console.warn('저장된 코드를 불러오지 못해 기본 템플릿을 사용합니다:', error);
    return {
      statusCode: 200,
      errorCode: '0000',
      errorMessage: 'Using default template',
      data: {
        problemUuid,
        language,
        content: getDefaultTemplate(language),
      }
    };
  }
};
