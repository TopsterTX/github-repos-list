import { RepositorySkeleton } from '@/components';

export const Loader = () => {
  return (
    <article className="flex flex-col gap-3">
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
      <RepositorySkeleton />
    </article>
  );
};
