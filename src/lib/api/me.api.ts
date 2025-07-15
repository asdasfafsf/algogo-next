import apiClient from "./api-client";
import type { ApiResponse } from "@/types/api.type";
import type { Me } from "@/types/me.type";

export const getMe = async () => {
    const response = await apiClient.get<ApiResponse<Me>>('/api/v1/me');
    return response.data;
}