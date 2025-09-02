export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  endpoints: {
    tasks: '/tasks',
    health: '/health',
  },
  timeout: 10000,
};

export const getApiUrl = (endpoint: string) => `${API_CONFIG.baseUrl}${endpoint}`;
