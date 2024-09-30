import { SelectHTMLAttributes } from 'react';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
};

export type SelectProps<T extends string> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
> & {
  onChange?: (value: T) => void;
  options: SelectOption<T>[];
  label: string;
};
