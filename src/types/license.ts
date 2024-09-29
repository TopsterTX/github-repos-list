type StringFieldKeys = 'key' | 'name' | 'spdx_id' | 'url' | 'node_id';

type StringFieldsType = Record<StringFieldKeys, string | null>;

export type License = StringFieldsType;
