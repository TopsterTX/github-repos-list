import { Repository } from '@/types';

export type SortVariants = 'stars' | 'forks' | 'help-wanted-issues' | 'updated';
export type OrderVariants = 'desc' | 'asc';

export type GetRepositoriesPayload = {
  q: string;
  sort?: SortVariants;
  order?: OrderVariants;
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
