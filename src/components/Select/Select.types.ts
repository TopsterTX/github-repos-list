import { SelectHTMLAttributes } from 'react';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
};

export type SelectProps<T extends string> = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange' | 'name' | 'value' | 'onBlur'
> & {
  label: string;
  name: string;
  options: SelectOption<T>[];
  onChange?: (value: T) => void;
};
