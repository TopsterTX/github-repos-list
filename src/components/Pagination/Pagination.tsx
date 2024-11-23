import cn from 'classnames';
import { Button } from '@/components';
import { paginationSelector, setCurrentPage } from '@/store/pagination';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  repositoriesErrorSelector,
  repositoriesLoadingSelector,
} from '@/store/repositories';
import { moveToTop } from '@/utils';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(repositoriesLoadingSelector);
  const error = useAppSelector(repositoriesErrorSelector);
  const { currentPage, maxPages } = useAppSelector(paginationSelector);

  const isDisabled = isLoading || error;

  const isNextStepDisabled = Boolean(currentPage === maxPages || isDisabled);
  const isPrevStepDisabled = Boolean(currentPage === 1 || isDisabled);

  const onChangeNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
    moveToTop();
  };

  const onChangePrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
    moveToTop();
  };

  return (
    <article className="flex gap-2 m-auto pb-4">
      <Button
        onClick={onChangePrevPage}
        disabled={isPrevStepDisabled}
        className={cn('border-gray-200', {
          ['hover:bg-gray-200']: !isPrevStepDisabled,
        })}
      >
        {'<'}
      </Button>
      <Button isActive className="font-medium text-blue-600 cursor-default">
        {currentPage}
      </Button>
      <Button
        onClick={onChangeNextPage}
        disabled={isNextStepDisabled}
        className={cn('border-gray-200', {
          ['hover:bg-gray-200']: !isNextStepDisabled,
        })}
      >
        {'>'}
      </Button>
    </article>
  );
};
