import { InputHTMLAttributes } from 'react';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'name' | 'onBlur'
> & {
  label: string;
  name: string;
  className?: string;
  onChange?: (value: string) => void;
};
