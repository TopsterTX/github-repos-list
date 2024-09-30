import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InitialState } from './types';
import { GetRepositoriesPayload } from '@/store/repositories';

const initialState: InitialState = {
  debouncedValue: null,
  value: '',
  sort: 'stars',
  order: 'desc',
  showFilters: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
    setSearchDebounced: (state, { payload }: PayloadAction<string>) => {
      state.debouncedValue = payload;
    },
    setSort: (
      state,
      { payload }: PayloadAction<GetRepositoriesPayload['sort']>,
    ) => {
      state.sort = payload;
    },
    setOrder: (
      state,
      { payload }: PayloadAction<GetRepositoriesPayload['order']>,
    ) => {
      state.order = payload;
    },
    toggleShowFilters: (state) => {
      state.showFilters = !state.showFilters;
    },
  },
});

export const {
  setSearchValue,
  setSort,
  toggleShowFilters,
  setOrder,
  setSearchDebounced,
} = searchSlice.actions;
export default searchSlice.reducer;
