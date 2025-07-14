export type ApiResponse<T> = {
    statusCode: number;
    errorCode: string;
    errorMessage: string;
    data: T
};

export type ApiRequestConfig = {
    headers?: Record<string, string>;
    params?: Record<string, any>;
    timeout?: number;
    signal?: AbortSignal;
};
  