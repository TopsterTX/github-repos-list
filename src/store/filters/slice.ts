import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, SetFiltersPayload } from './types';

const initialState: InitialState = {
  showFilters: false,
  params: {
    lang: 'TypeScript',
    org: '',
    order: 'desc',
    sort: 'stars',
    user: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFiltersParams: (
      state,
      { payload }: PayloadAction<SetFiltersPayload>,
    ) => {
      state.params = payload;
    },
    resetFiltersParams: (state) => {
      state.params = initialState.params;
    },
    toggleShowFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export const { setFiltersParams, resetFiltersParams, toggleShowFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
