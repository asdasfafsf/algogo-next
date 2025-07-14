import { ApiResponse } from "@/types/api.type";
import { IquiryProblemsSummary, ProblemSummaryList } from "@/types/problem.type";
import apiClient from "./api-client";

export const getProblemList = async (params: IquiryProblemsSummary) => {
    const response = await apiClient.post<ApiResponse<ProblemSummaryList[]>>('api/v2/problems', params);
    return response.data;
};