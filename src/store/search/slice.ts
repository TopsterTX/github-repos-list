import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InitialState } from './types';

const initialState: InitialState = {
  debouncedValue: null,
  value: '',
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
    resetInput: () => initialState,
  },
});

export const { setSearchValue, setSearchDebounced, resetInput } =
  searchSlice.actions;
export default searchSlice.reducer;
