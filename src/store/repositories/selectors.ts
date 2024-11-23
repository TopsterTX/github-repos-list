import { RootState } from '@/store';

export const repositoriesSelector = (state: RootState) => state.repositories;
export const repositoriesDataSelector = (state: RootState) =>
  repositoriesSelector(state).data;
export const repositoriesErrorSelector = (state: RootState) =>
  repositoriesSelector(state).error;
export const repositoriesLoadingSelector = (state: RootState) =>
  repositoriesSelector(state).isLoading;
