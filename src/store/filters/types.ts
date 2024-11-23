import { OrderVariants, SortVariants } from '@/store/repositories';

export type InitialState = {
  showFilters: boolean;
  params: Filters;
};

export type Filters = {
  sort: SortVariants;
  order: OrderVariants;
  lang: string | null;
  user: string | null;
  org: string | null;
};

export type SetFiltersPayload = Filters;
