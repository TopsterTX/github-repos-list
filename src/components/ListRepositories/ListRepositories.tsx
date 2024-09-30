import { Error, Loader, Repository } from '@/components';
import { useAppSelector } from '@/hooks';
import { repositoriesSelector } from '@/store/repositories';

export const ListRepositories = () => {
  const { data, isLoading, error } = useAppSelector(repositoriesSelector);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error text={error} />;
  }

  return (
    <ul className="flex flex-col gap-4">
      {data.map((data) => (
        <Repository key={data.id} {...data} />
      ))}
    </ul>
  );
};
