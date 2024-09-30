import { searchSelector, setOrder, setSort } from '@/store/search';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { OrderVariants, SortVariants } from '@/store/repositories';
import { ORDER_OPTIONS, SORT_OPTIONS, FIRST_PAGE } from '@/constants';
import { Select } from '@/components';
import { setCurrentPage } from '@/store/pagination';

export const FilterBlock = () => {
  const dispatch = useAppDispatch();

  const { showFilters, sort, order } = useAppSelector(searchSelector);

  const onChangeHandler = () => {
    dispatch(setCurrentPage(FIRST_PAGE));
  };

  const changeSortHandler = (value: SortVariants) => {
    dispatch(setSort(value));
    onChangeHandler();
  };

  const changeOrderHandler = (value: OrderVariants) => {
    dispatch(setOrder(value));
    onChangeHandler();
  };

  if (!showFilters) {
    return null;
  }

  return (
    <section className="border-2 rounded-xl p-5 flex gap-4">
      <Select
        label="Sort"
        value={sort}
        options={SORT_OPTIONS}
        onChange={changeSortHandler}
      />
      <Select
        label="Order"
        value={order}
        options={ORDER_OPTIONS}
        onChange={changeOrderHandler}
      />
    </section>
  );
};
