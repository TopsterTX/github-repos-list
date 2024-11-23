import { RootState } from '@/store';

export const filtersSelector = (state: RootState) => state.filters;
export const filterParamsSelector = (state: RootState) =>
  filtersSelector(state).params;
export const showFiltersSelector = (state: RootState) =>
  filtersSelector(state).showFilters;
