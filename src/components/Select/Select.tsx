import { SelectIcon } from '@/assets';
import { SelectProps } from './Select.types';
import { ChangeEventHandler } from 'react';

export const Select = <T extends string>({
  options,
  label,
  onChange: onChangeFromProps,
  ...rest
}: SelectProps<T>) => {
  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value as T;

    onChangeFromProps?.(value);
  };

  return (
    <article className="flex flex-1 flex-col gap-1">
      <span className="text-xs text-gray-600">{label}</span>
      <div className="relative">
        <select
          {...rest}
          onChange={onChange}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          {Boolean(options.length) &&
            options.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
        </select>
        <SelectIcon className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700" />
      </div>
    </article>
  );
};