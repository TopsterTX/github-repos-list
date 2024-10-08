import { type ChangeEventHandler } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import cn from 'classnames';
import { InputProps } from './Input.types';

export const Input = ({
  onChange,
  className,
  label,
  name,
  ...rest
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange: onChangeForm, ...restField } }) => {
        const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (
          event,
        ) => {
          onChangeForm(event.target.value);
          onChange?.(event.target.value);
        };

        return (
          <article className="flex border rounded text-gray-500 px-3 items-center">
            <span className="border-r text-md py-1.5 pr-3 block">{label}:</span>
            <input
              {...rest}
              {...restField}
              className={cn(
                className,
                'appearance-none w-full outline-none px-2 text-black',
              )}
              type="text"
              onChange={onChangeHandler}
            />
          </article>
        );
      }}
    />
  );
};
