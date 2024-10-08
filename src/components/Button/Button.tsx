import cn from 'classnames';
import type { ButtonProps } from './Button.types';

export const Button = ({
  children,
  className,
  isActive,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-2 py-0.5 flex items-center justify-center rounded-md text-black border border-white transition',
        className,
        {
          ['border-blue-600 bg-white']: isActive && !disabled,
          ['bg-gray-100 text-gray-400']: disabled,
        },
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
