import { OrderVariants, SortVariants } from '@/store/repositories';
import { SelectOption } from '@/components/Select/Select.types';

export const FIRST_PAGE = 1;

export const ORDER_OPTIONS: SelectOption<OrderVariants>[] = [
  {
    value: 'desc',
    label: 'Descending',
  },
  { value: 'asc', label: 'Ascending' },
];

export const SORT_OPTIONS: SelectOption<SortVariants>[] = [
  {
    value: 'stars',
    label: 'Stars',
  },
  { value: 'forks', label: 'Forks' },
  { value: 'help-wanted-issues', label: 'Help wanted issues' },
  { value: 'updated', label: 'Updated' },
];
