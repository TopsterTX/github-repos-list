type StringFieldKeys =
  | 'avatar_url'
  | 'events_url'
  | 'followers_url'
  | 'following_url'
  | 'gists_url'
  | 'gravatar_id'
  | 'html_url'
  | 'login'
  | 'node_id'
  | 'organizations_url'
  | 'received_events_url'
  | 'repos_url'
  | 'starred_url'
  | 'subscriptions_url'
  | 'type'
  | 'url';

type StringFieldsType = Record<StringFieldKeys, string | null>;

export type Owner = StringFieldsType & {
  id: number;
  site_admin: boolean;
};
