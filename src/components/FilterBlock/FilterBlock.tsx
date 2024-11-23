import cn from 'classnames';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, Select } from '@/components';
import { ORDER_OPTIONS, SORT_OPTIONS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { createSubmitHandler, getDefaultValue } from './FilterBlock.utils';
import { useCallback, useMemo } from 'react';
import {
  type Filters,
  filtersSelector,
  resetFiltersParams,
} from '@/store/filters';
import { repositoriesLoadingSelector } from '@/store/repositories';

export const FilterBlock = () => {
  const dispatch = useAppDispatch();
  const { params: filterParams, showFilters } = useAppSelector(filtersSelector);
  const isLoading = useAppSelector(repositoriesLoadingSelector);

  const defaultValues = useMemo(
    () => getDefaultValue(filterParams),
    [filterParams],
  );

  const form = useForm<Filters>({
    defaultValues,
  });

  const { handleSubmit, reset } = form;

  const onSubmitHandler = createSubmitHandler(dispatch, handleSubmit);

  const resetClickHandler = useCallback(() => {
    dispatch(resetFiltersParams());
    reset();
  }, []);

  return (
    <form
      className={cn('border-2 rounded-xl p-5 flex flex-col gap-4', {
        ['hidden']: !showFilters,
      })}
      onSubmit={onSubmitHandler}
    >
      <FormProvider {...form}>
        <section className="flex gap-4">
          <Select label="Sort" name="sort" options={SORT_OPTIONS} />
          <Select label="Order" name="order" options={ORDER_OPTIONS} />
        </section>
        <section className="flex flex-col gap-4 justify-center">
          <Input label="lang" name="lang" disabled={isLoading} />
          <Input label="user" name="user" disabled={isLoading} />
          <Input label="org" name="org" disabled={isLoading} />
        </section>
        <div className="flex gap-2">
          <Button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-400"
          >
            Apply
          </Button>
          <Button
            className="bg-rose-500 text-white hover:bg-rose-400"
            onClick={resetClickHandler}
          >
            Reset
          </Button>
        </div>
      </FormProvider>
    </form>
  );
};
