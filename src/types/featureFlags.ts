export type Environment = 'production' | 'preview' | 'development';

export interface FeatureFlag {
  id: string;
  key: string;
  description: string;
  enabled: boolean;
  environment: Environment;
  updatedAt: string;
}
