import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
  currentPage: 1,
  maxPages: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
    setMaxPages: (state, { payload }: PayloadAction<number>) => {
      state.maxPages = payload;
    },
  },
});

export const { setCurrentPage, setMaxPages } = paginationSlice.actions;
export default paginationSlice.reducer;
