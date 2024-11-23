import { type UseFormHandleSubmit } from 'react-hook-form';
import { Filters } from '@/store/filters/types';
import { AppDispatch } from '@/store';
import { setFiltersParams } from '@/store/filters';

export const getDefaultValue = (filters: Filters) => filters;

export const createSubmitHandler = (
  dispatch: AppDispatch,
  formHandler: UseFormHandleSubmit<Filters>,
) =>
  formHandler((values) => {
    dispatch(setFiltersParams(values));
  });
