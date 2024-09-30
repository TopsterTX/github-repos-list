import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getRepositories } from '@/store/repositories';
import { paginationSelector } from '@/store/pagination';
import { searchSelector } from '@/store/search';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';

export const useGetRepositories = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(paginationSelector);
  const { value, sort, order } = useAppSelector(searchSelector);

  useEffect(() => {
    dispatch(
      getRepositories({
        q: `lang:Typescript${value ? ` ${value}` : ''}`,
        per_page: VITE_REPOSITORIES_PER_PAGE,
        page: currentPage,
        sort,
        order,
      }),
    );
  }, [sort, order, value, dispatch, currentPage]);
};
