import { ChangeEventHandler, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from '@/assets';
import {
  searchSelector,
  setSearchValue,
  toggleShowFilters,
} from '@/store/search';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setCurrentPage } from '@/store/pagination';
import { Button } from '@/components';

const DELAY = 700;

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const { showFilters } = useAppSelector(searchSelector);

  const debounced = useDebouncedCallback((value) => {
    dispatch(setSearchValue(value));
    dispatch(setCurrentPage(1));
  }, DELAY);

  const changeSearchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    debounced(event.target.value);
  };

  const changeOpenFiltersHandler = () => {
    dispatch(toggleShowFilters());
  };

  return (
    <section className="relative flex items-center">
      <SearchIcon className="w-5 h-5 absolute z-10 left-4 fill-gray-400" />
      <Button
        className="absolute right-4 w-7 h-7 border-1 py-0.5 px-1"
        onClick={changeOpenFiltersHandler}
      >
        <div className="flex flex-col gap-1">
          <div
            className={`transform-gpu transition relative h-0.5 w-4 ${showFilters ? 'top-[3px] rotate-45' : ''} rounded-md bg-gray-400`}
          />
          <div
            className={`transform-gpu transition relative h-0.5 w-4 ${showFilters ? 'hidden' : ''} rounded-md bg-gray-400`}
          />
          <div
            className={`transform-gpu transition relative h-0.5 w-4 ${showFilters ? 'bottom-[3px] rotate-[-45deg]' : ''} rounded-md bg-gray-400`}
          />
        </div>
      </Button>
      <input
        type="text"
        className="p-2 border-2 rounded-xl w-full pl-12 outline-0"
        value={value}
        onChange={changeSearchHandler}
      />
    </section>
  );
};
