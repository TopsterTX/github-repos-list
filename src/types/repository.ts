import { License, Owner } from '@/types';

type StringFieldKeys =
  | 'archive_url'
  | 'assignees_url'
  | 'blobs_url'
  | 'branches_url'
  | 'collaborators_url'
  | 'comments_url'
  | 'commits_url'
  | 'compare_url'
  | 'contents_url'
  | 'contributors_url'
  | 'deployments_url'
  | 'description'
  | 'downloads_url'
  | 'events_url'
  | 'forks_url'
  | 'full_name'
  | 'git_commits_url'
  | 'git_refs_url'
  | 'git_tags_url'
  | 'hooks_url'
  | 'issue_comment_url'
  | 'issue_events_url'
  | 'issues_url'
  | 'keys_url'
  | 'labels_url'
  | 'languages_url'
  | 'merges_url'
  | 'milestones_url'
  | 'name'
  | 'node_id'
  | 'notifications_url'
  | 'pulls_url'
  | 'releases_url'
  | 'stargazers_url'
  | 'statuses_url'
  | 'subscribers_url'
  | 'subscription_url'
  | 'tags_url'
  | 'teams_url'
  | 'trees_url'
  | 'url'
  | 'created_at'
  | 'updated_at'
  | 'pushed_at'
  | 'git_url'
  | 'ssh_url'
  | 'clone_url'
  | 'svn_url'
  | 'homepage'
  | 'language'
  | 'mirror_url'
  | 'visibility'
  | 'default_branch';

type NumberFieldKeys =
  | 'id'
  | 'size'
  | 'stargazers_count'
  | 'watchers_count'
  | 'open_issues_count'
  | 'forks'
  | 'open_issues'
  | 'watchers'
  | 'score'
  | 'forks_count';

type BooleanFieldKeys =
  | 'fork'
  | 'private'
  | 'has_issues'
  | 'has_projects'
  | 'has_downloads'
  | 'has_wiki'
  | 'has_pages'
  | 'has_discussions'
  | 'archived'
  | 'disabled'
  | 'allow_forking'
  | 'is_template'
  | 'web_commit_signoff_required';

type StringFieldsType = Record<StringFieldKeys, string | null>;
type NumberFieldsType = Record<NumberFieldKeys, number>;
type BooleanFieldsType = Record<BooleanFieldKeys, boolean>;

export type Repository = StringFieldsType &
  NumberFieldsType &
  BooleanFieldsType & {
    owner: Owner;
    license: License;
    topics: string[];
    html_url: string;
  };
