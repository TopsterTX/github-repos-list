import { OrderVariants, SortVariants } from '@/store/repositories';

export type InitialState = {
  debouncedValue: string | null;
  value: string;
  sort: SortVariants;
  order: OrderVariants;
  showFilters: boolean;
};
