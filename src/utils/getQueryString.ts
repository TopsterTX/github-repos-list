import { Filters } from '@/store/filters';

export const getQueryString = (
  filters: Partial<Filters>,
  debouncedValue: string | null,
) => {
  const queryStringFromFilters = Object.entries(filters).reduce((acc, next) => {
    const [key, value] = next;
    const paramString = value ? `${key}:${value}` : '';

    return [acc, paramString].filter((val) => val).join(' ');
  }, '');

  return [queryStringFromFilters, debouncedValue]
    .filter((val) => val)
    .join(' ');
};
