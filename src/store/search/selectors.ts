import { RootState } from '@/store';

export const searchSelector = (state: RootState) => state.search;
export const debouncedSearchValueSelector = (state: RootState) =>
  searchSelector(state).debouncedValue;
export const searchValueSelector = (state: RootState) =>
  searchSelector(state).value;
