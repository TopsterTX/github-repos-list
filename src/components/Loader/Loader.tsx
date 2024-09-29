import { RepositorySkeleton } from '@/components';

const SKELETON_COUNT = 5;

export const Loader = () => {
  return (
    <article className="flex flex-col gap-3">
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <RepositorySkeleton key={i} />
      ))}
    </article>
  );
};
