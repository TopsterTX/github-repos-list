import { combineReducers } from '@reduxjs/toolkit';
import { repositories } from '@/store/repositories';
import { pagination } from '@/store/pagination';
import { search } from '@/store/search';

export const rootReducer = combineReducers({
  repositories,
  pagination,
  search,
});
