import { ErrorProps } from './Error.types';

export const Error = ({ text }: ErrorProps) => {
  return (
    <article className="flex items-center justify-center mt-10">
      <span className="text-md text-gray-500 font-medium text-center">
        {text}
      </span>
    </article>
  );
};
