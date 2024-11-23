import { useAppSelector } from '@/hooks';
import { repositoriesErrorSelector } from '@/store/repositories';

export const Error = () => {
  const error = useAppSelector(repositoriesErrorSelector);
  return (
    <article className="flex items-center justify-center mt-10">
      <span className="text-md text-gray-500 font-medium text-center">
        {error || 'Произошла ошибка'}
      </span>
    </article>
  );
};
