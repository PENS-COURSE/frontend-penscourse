export interface Configuration {
  id?: number;
  slug?: string;
  title?: string;
  description?: null;
  can_delete?: boolean;
  created_at?: Date;
  updated_at?: Date;
  DynamicConfigurationValues?: DynamicConfigurationValue[];
}

export interface DynamicConfigurationValue {
  id?: number;
  dynamic_configuration_id?: number;
  key?: string;
  value?: string;
  type?: string;
  can_delete?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
