import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GetRepositoriesPayload,
  InitialState,
  SuccessGetRepositoriesPayload,
} from './types';

const initialState: InitialState = {
  data: [],
  isLoading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    getRepositories: (
      state,
      _action: PayloadAction<GetRepositoriesPayload>,
    ) => {
      state.isLoading = true;
      state.error = null;
    },
    successGetRepositories: (
      state,
      { payload }: PayloadAction<SuccessGetRepositoriesPayload>,
    ) => {
      state.data = payload.items;
      state.isLoading = false;
    },
    errorGetRepositories: (state, { payload }) => {
      state.data = [];
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getRepositories, successGetRepositories, errorGetRepositories } =
  repositoriesSlice.actions;
export default repositoriesSlice.reducer;
