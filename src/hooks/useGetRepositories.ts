import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getRepositories } from '@/store/repositories';
import { paginationSelector } from '@/store/pagination';
import { searchSelector } from '@/store/search';
import { REPOSITORIES_PER_PAGE } from '@/constants';

export const useGetRepositories = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector(paginationSelector);
  const { value } = useAppSelector(searchSelector);

  useEffect(() => {
    dispatch(
      getRepositories({
        q: `lang:Typescript${value ? ` ${value}` : ''}`,
        per_page: REPOSITORIES_PER_PAGE,
        page: currentPage,
        sort: 'stars',
      }),
    );
  }, [value, dispatch, currentPage]);
};
