import { GetRepositoriesPayload } from '@/store/repositories';

export type InitialState = {
  value: string | null;
  sort: GetRepositoriesPayload['sort'];
  order: GetRepositoriesPayload['order'];
  showFilters: boolean;
};
