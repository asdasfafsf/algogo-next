import { AxiosResponse } from 'axios';
import qs from 'qs';
import { apiClient } from '../api-client';
import {
  IquiryProblemsSummary, Problem, ProblemSummaryList, TodayProblem,
} from '@/types/problem.type';
import { ApiResponse } from '@/types/api.type';

export const getProblemList = async (requestProblemListDto: IquiryProblemsSummary) => {
  const queryString = qs.stringify(requestProblemListDto, { arrayFormat: 'brackets' });
  const response: AxiosResponse<ApiResponse<ProblemSummaryList>> = await apiClient.get(`/api/v2/problems?${queryString}`);
  return response.data;
};

export const getProblem = async (problemUuid: string): Promise<ApiResponse<Problem>> => {
  const response: AxiosResponse<ApiResponse<Problem>> = await apiClient.get(`/api/v2/problems/${problemUuid}`);
  return response.data;
};

export const getTodayProblems = async (day: number = 0): Promise<ApiResponse<TodayProblem[]>> => {
  const url = `/api/v2/problems/today?day=${day}`;
  const response: AxiosResponse<ApiResponse<TodayProblem[]>> = await apiClient.get(url);
  return response.data;
};
