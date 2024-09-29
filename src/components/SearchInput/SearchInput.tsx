import { ChangeEventHandler, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from '@/assets';
import { setSearchValue } from '@/store/search';
import { useAppDispatch } from '@/hooks';
import { setCurrentPage } from '@/store/pagination';

const DELAY = 700;

export const SearchInput = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');

  const debounced = useDebouncedCallback((value) => {
    dispatch(setSearchValue(value));
    dispatch(setCurrentPage(1));
  }, DELAY);

  const changeSearchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    debounced(event.target.value);
  };

  return (
    <section className="relative flex items-center">
      <SearchIcon className="w-5 h-5 absolute z-10 left-4 fill-gray-400" />
      <input
        type="text"
        className="p-2 border-2 rounded-xl w-full pl-12 outline-0"
        value={value}
        onChange={changeSearchHandler}
      />
    </section>
  );
};
