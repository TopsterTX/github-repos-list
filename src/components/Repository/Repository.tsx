import { Topic } from '@/components';
import { getStarString } from '@/utils';
import { StarIcon } from '@/assets';
import { RepositoryProps } from './Repository.types';

export const Repository = ({
  full_name,
  owner,
  description,
  topics,
  html_url,
  language,
  stargazers_count,
}: RepositoryProps) => {
  const starCountString = getStarString(stargazers_count);

  return (
    <article className="flex flex-col gap-3 p-5 border-2 rounded-xl">
      <section className="flex gap-4 items-center">
        <div className="h-6 w-6 border-mg rounded-md overflow-hidden">
          <img src={owner.avatar_url} alt="avatar" />
        </div>
        <a
          className="text-xl text-blue-600 overflow-hidden"
          href={html_url}
          target="_blank"
        >
          {full_name}
        </a>
      </section>
      <span className="block overflow-hidden">{description}</span>
      <section className="flex gap-2 items-center flex-wrap">
        {Boolean(topics.length) &&
          topics.map((topic) => <Topic key={topic} label={topic} />)}
      </section>
      <section className="flex gap-3 items-center">
        <span className="text-sm text-neutral-500">{language}</span>
        <div className="flex items-center">
          <StarIcon className="w-5 h-5" />
          <span className="text-sm text-neutral-500">{starCountString}</span>
        </div>
      </section>
    </article>
  );
};
