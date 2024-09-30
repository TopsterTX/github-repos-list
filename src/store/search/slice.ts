import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderVariants, SortVariants } from '@/store/repositories';
import type { InitialState } from './types';

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
    setSort: (state, { payload }: PayloadAction<SortVariants>) => {
      state.sort = payload;
    },
    setOrder: (state, { payload }: PayloadAction<OrderVariants>) => {
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
