import { useAppDispatch } from '@/hooks';
import { TopicProps } from './Topic.types';
import { setSearchDebounced, setSearchValue } from '@/store/search';
import { setCurrentPage } from '@/store/pagination';
import { moveToTop } from '@/utils';

export const Topic = ({ label }: TopicProps) => {
  const dispatch = useAppDispatch();

  const selectTopic = () => {
    moveToTop();
    dispatch(setSearchValue(label));
    dispatch(setSearchDebounced(label));
    dispatch(setCurrentPage(1));
  };

  return (
    <span
      onClick={selectTopic}
      className="transition px-2 py-0.5 rounded-xl bg-blue-100 text-sm text-blue-700 hover:cursor-pointer hover:bg-blue-200"
    >
      {label}
    </span>
  );
};
