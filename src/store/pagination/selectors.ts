import { RootState } from '@/store';

export const paginationSelector = (state: RootState) => state.pagination;
export const currentPageSelector = (state: RootState) =>
  paginationSelector(state).currentPage;
export const maxPagesSelector = (state: RootState) =>
  paginationSelector(state).maxPages;
