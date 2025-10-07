import { AxiosResponse } from 'axios';
import { apiClient } from './api-client';
import { ApiResponse } from '@/types/api.type';
import { Language } from '@/types/language.type';
import { Code, CodeSetting, CodeTemplate, CodeTemplateSummary, CreateCodeTemplate, UpdateCodeTemplate } from '@/types/code-template.type';

export const saveCode = async (saveCode: Code) => {
  const response: AxiosResponse<ApiResponse<null>> = await apiClient.put('/api/v1/code/problem', saveCode);
  return response.data;
};

export const loadCode = async (problemUuid: string, language: Language) => {
  const response: AxiosResponse<ApiResponse<Code>> = await apiClient.get(`/api/v1/code/problem/${problemUuid}?language=${encodeURIComponent(language)}`);
  return response.data;
};

export const getSetting = async () => {
  const response: AxiosResponse<ApiResponse<CodeSetting>> = await apiClient.get('/api/v1/code/setting');
  return response.data;
};

export const setSetting = async (setting: CodeSetting) => {
  const response: AxiosResponse<ApiResponse<null>> = await apiClient.put('/api/v1/code/setting', setting);
  return response.data;
};

export const createTemplate = async (createTemplate: CreateCodeTemplate) => {
  const response: AxiosResponse<ApiResponse<null>> = await apiClient.post('/api/v1/code/template', createTemplate);
  return response.data;
};

export const updateTemplate = async (updateTemplate: UpdateCodeTemplate) => {
  const response: AxiosResponse<ApiResponse<null>> = await apiClient.put('/api/v1/code/template', updateTemplate);
  return response.data;
};

export const deleteTemplate = async (uuid: string) => {
  const response: AxiosResponse<ApiResponse<null>> = await apiClient.delete(`/api/v1/code/template/${uuid}`);
  return response.data;
};

export const getTemplate = async (uuid: string) => {
  const response: AxiosResponse<ApiResponse<CodeTemplate>> = await apiClient.get(`/api/v1/code/template/${uuid}`);
  return response.data;
};

export const getTemplates = async () => {
  const response: AxiosResponse<ApiResponse<CodeTemplateSummary[]>> = await apiClient.get('/api/v1/code/template');
  return response.data;
};
