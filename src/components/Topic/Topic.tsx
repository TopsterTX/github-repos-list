import { TopicProps } from './Topic.types';

export const Topic = ({ label }: TopicProps) => {
  return (
    <span className="px-2 py-0.5 rounded-xl bg-blue-100 text-sm text-blue-600">
      {label}
    </span>
  );
};
