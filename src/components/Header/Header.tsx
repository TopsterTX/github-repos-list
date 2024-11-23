import { toggleShowFilters } from '@/store/filters';
import { Button, SearchInput } from '@/components';
import { FilterIcon } from '@/assets';
import { useAppDispatch } from '@/hooks';

export const Header = () => {
  const dispatch = useAppDispatch();

  const changeOpenFiltersHandler = () => {
    dispatch(toggleShowFilters());
  };

  return (
    <section className="flex justify-center items-center gap-2">
      <SearchInput />
      <Button
        className="hover:bg-gray-200 transition bg-gray-100 py-2"
        onClick={changeOpenFiltersHandler}
      >
        <FilterIcon className="h-5 w-5 stroke-gray-600" />
      </Button>
    </section>
  );
};
