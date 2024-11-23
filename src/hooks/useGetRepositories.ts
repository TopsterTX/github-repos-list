import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useDeepEqualMemo } from '@/hooks';
import { getRepositories } from '@/store/repositories';
import { currentPageSelector } from '@/store/pagination';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';
import { filterParamsSelector } from '@/store/filters';
import { getQueryString } from '@/utils';
import { debouncedSearchValueSelector } from '@/store/search/selectors';

export const useGetRepositories = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(currentPageSelector);
  const debouncedValue = useAppSelector(debouncedSearchValueSelector);
  const params = useAppSelector(filterParamsSelector);
  const { sort, order, ...filters } = params ?? {};

  const queryString = useDeepEqualMemo(
    () => getQueryString(filters, debouncedValue),
    [filters, debouncedValue],
  );

  useEffect(() => {
    dispatch(
      getRepositories({
        q: queryString,
        per_page: VITE_REPOSITORIES_PER_PAGE,
        page: currentPage,
        sort,
        order,
      }),
    );
  }, [sort, order, debouncedValue, dispatch, currentPage, queryString]);
};
