import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InitialState } from './types';

const initialState: InitialState = {
  value: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
