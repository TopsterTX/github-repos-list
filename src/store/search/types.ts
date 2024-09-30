import { GetRepositoriesPayload } from '@/store/repositories';

export type InitialState = {
  debouncedValue: string | null;
  value: string;
  sort: GetRepositoriesPayload['sort'];
  order: GetRepositoriesPayload['order'];
  showFilters: boolean;
};
