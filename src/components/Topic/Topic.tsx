import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  debouncedSearchValueSelector,
  setSearchDebounced,
  setSearchValue,
} from '@/store/search';
import { setCurrentPage } from '@/store/pagination';
import { moveToTop } from '@/utils';
import { FIRST_PAGE } from '@/constants';
import { TopicProps } from './Topic.types';

export const Topic = ({ label }: TopicProps) => {
  const dispatch = useAppDispatch();
  const debouncedSearchValue = useAppSelector(debouncedSearchValueSelector);

  const isSelectedTopic = debouncedSearchValue === label;

  const selectTopic = () => {
    if (!isSelectedTopic) {
      moveToTop();
      dispatch(setSearchValue(label));
      dispatch(setSearchDebounced(label));
      dispatch(setCurrentPage(FIRST_PAGE));
    }
  };

  return (
    <span
      onClick={selectTopic}
      className={cn(
        'transition px-2 py-0.5 rounded-xl bg-blue-100 text-sm text-blue-700 hover:cursor-pointer hover:bg-blue-200',
        {
          ['bg-blue-200 font-medium hover:bg-blue-300']: isSelectedTopic,
        },
      )}
    >
      {label}
    </span>
  );
};
