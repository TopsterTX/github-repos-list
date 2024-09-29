import { Button } from '@/components';
import { paginationSelector, setCurrentPage } from '@/store/pagination';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { repositoriesSelector } from '@/store/repositories';
import { moveToTop } from '@/utils';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(repositoriesSelector);
  const { currentPage, maxPages } = useAppSelector(paginationSelector);

  const isNextStepDisabled = currentPage === maxPages;
  const isPrevStepDisabled = currentPage === 1;

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
        disabled={Boolean(isPrevStepDisabled || isLoading || error)}
        className="border-gray-200"
      >
        {'<'}
      </Button>
      <Button isActive className="font-medium text-blue-600">
        {currentPage}
      </Button>
      <Button
        onClick={onChangeNextPage}
        disabled={Boolean(isNextStepDisabled || isLoading || error)}
        className="border-gray-200"
      >
        {'>'}
      </Button>
    </article>
  );
};
