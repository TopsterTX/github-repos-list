import { ChangeEventHandler } from 'react';
import { searchSelector, setOrder, setSort } from '@/store/search';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { GetRepositoriesPayload } from '@/store/repositories';
import { setCurrentPage } from '@/store/pagination';

export const FilterBlock = () => {
  const dispatch = useAppDispatch();
  const { showFilters, order, sort } = useAppSelector(searchSelector);

  const changeOrderHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(setOrder(event.target.value as GetRepositoriesPayload['order']));
    dispatch(setCurrentPage(1));
  };

  const changeSortHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(setSort(event.target.value as GetRepositoriesPayload['sort']));
    dispatch(setCurrentPage(1));
  };

  if (!showFilters) {
    return null;
  }

  return (
    <section className="border-2 rounded-xl p-5 flex gap-4">
      <article id="select_sort" className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-gray-600">Sort</span>
        <div className="relative">
          <select
            value={sort}
            onChange={changeSortHandler}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="help-wanted-issues">Issues</option>
            <option value="updated">Updated</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </article>
      <article id="select_order" className="flex flex-1 flex-col gap-1">
        <span className="text-xs text-gray-600">Order</span>
        <div className="relative">
          <select
            value={order}
            onChange={changeOrderHandler}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>
      </article>
    </section>
  );
};
