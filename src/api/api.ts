import { ofetch } from 'ofetch';
import { VITE_API_URL, VITE_GITHUB_TOKEN } from '@/config';

export const API = ofetch.create({
  baseURL: VITE_API_URL,
  headers: {
    ...(VITE_GITHUB_TOKEN && { Authorization: `Bearer ${VITE_GITHUB_TOKEN}` }),
  },
});

export const getFromAPI = async (
  url: string,
  query: Record<string, string | number>,
) => await API(url, { method: 'GET', query });
