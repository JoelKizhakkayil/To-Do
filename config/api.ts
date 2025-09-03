export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://to-do-backend-xwac.onrender.com',
  endpoints: {
    tasks: '/tasks',
    health: '/health',
  },
  timeout: 10000,
};

// Join base URL and endpoint safely (avoid double slashes)
export const getApiUrl = (endpoint: string) => {
  const base = API_CONFIG.baseUrl.replace(/\/+$/, '');
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};
