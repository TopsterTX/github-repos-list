import { ChangeEventHandler } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from '@/assets';
import {
  setSearchDebounced,
  setSearchValue,
  searchValueSelector,
  resetInput,
} from '@/store/search';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { resetPages, setCurrentPage } from '@/store/pagination';
import { Button } from '@/components';
import { VITE_SEARCH_DELAY_MS } from '@/config';
import { FIRST_PAGE } from '@/constants';

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const value = useAppSelector(searchValueSelector);

  const debounced = useDebouncedCallback((value) => {
    dispatch(setSearchDebounced(value));
    dispatch(setCurrentPage(FIRST_PAGE));
  }, VITE_SEARCH_DELAY_MS);

  const changeSearchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setSearchValue(event.target.value));
    debounced(event.target.value);
  };

  const onButtonClickHandler = () => {
    dispatch(resetInput());
    dispatch(resetPages());
  };

  return (
    <article className="relative flex items-center gap-2 flex-1">
      <SearchIcon className="w-5 h-5 absolute z-10 left-4 fill-gray-400" />
      <Button
        className="absolute right-4 w-7 h-7 border-1 py-1 px-1.5 hover:bg-gray-200 transition bg-gray-100"
        onClick={onButtonClickHandler}
      >
        <div className="flex flex-col gap-1">
          <div className="transform-gpu transition relative h-0.5 w-4 top-[3px] rotate-45 rounded-md bg-gray-500" />
          <div className="transform-gpu transition relative h-0.5 w-4 bottom-[3px] rotate-[-45deg] rounded-md bg-gray-500" />
        </div>
      </Button>
      <input
        type="text"
        className="p-2 border-2 rounded-xl w-full px-12 outline-0"
        value={value}
        onChange={changeSearchHandler}
      />
    </article>
  );
};
