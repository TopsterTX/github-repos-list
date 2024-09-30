import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getRepositories } from '@/store/repositories';
import { paginationSelector } from '@/store/pagination';
import { searchSelector } from '@/store/search';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';

export const useGetRepositories = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(paginationSelector);
  const { debouncedValue, sort, order } = useAppSelector(searchSelector);

  useEffect(() => {
    dispatch(
      getRepositories({
        q: `lang:Typescript${debouncedValue ? ` ${debouncedValue}` : ''}`,
        per_page: VITE_REPOSITORIES_PER_PAGE,
        page: currentPage,
        sort,
        order,
      }),
    );
  }, [sort, order, debouncedValue, dispatch, currentPage]);
};
