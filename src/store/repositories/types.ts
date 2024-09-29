import { Repository } from '@/types';

export type GetRepositoriesPayload = {
  q: string;
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
  order?: 'desc' | 'asc';
  per_page?: number;
  page?: number;
};

export type SuccessGetRepositoriesPayload = {
  total_count: number;
  incomplete_result: boolean;
  items: Repository[];
};

export type InitialState = {
  data: Repository[];
  isLoading: boolean;
  error: string | null;
};
