import { clientApiClient } from './client-api-client';
import { serverApiClient } from './server-api-client';
const apiClient = typeof window !== 'undefined' ? clientApiClient : serverApiClient;

export default apiClient;