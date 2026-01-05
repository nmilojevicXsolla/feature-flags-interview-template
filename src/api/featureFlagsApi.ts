import { FeatureFlag } from '../types/featureFlags';

const mockFeatureFlags: FeatureFlag[] = [
  {
    id: 'ff-001',
    key: 'darkModeEnabled',
    description: 'Enable dark mode theme for all users',
    enabled: true,
    environment: 'production',
    updatedAt: '2025-01-05T12:30:00Z',
  },
  {
    id: 'ff-002',
    key: 'newDashboard',
    description: 'Show the redesigned dashboard interface',
    enabled: false,
    environment: 'preview',
    updatedAt: '2025-01-05T09:15:00Z',
  },
  {
    id: 'ff-003',
    key: 'betaFeatures',
    description: 'Access to experimental beta features',
    enabled: true,
    environment: 'development',
    updatedAt: '2025-01-04T14:00:00Z',
  },
  {
    id: 'ff-004',
    key: 'aiAssistant',
    description: 'Enable AI-powered code assistant',
    enabled: true,
    environment: 'production',
    updatedAt: '2025-01-03T16:45:00Z',
  },
  {
    id: 'ff-005',
    key: 'newCheckoutFlow',
    description: 'Streamlined checkout process with fewer steps',
    enabled: false,
    environment: 'preview',
    updatedAt: '2025-01-02T11:20:00Z',
  },
  {
    id: 'ff-006',
    key: 'socialLogin',
    description: 'Allow login via Google, GitHub, and Apple',
    enabled: true,
    environment: 'production',
    updatedAt: '2025-01-01T08:30:00Z',
  },
  {
    id: 'ff-007',
    key: 'advancedAnalytics',
    description: 'Extended analytics with custom reports',
    enabled: false,
    environment: 'development',
    updatedAt: '2024-12-30T13:00:00Z',
  },
  {
    id: 'ff-008',
    key: 'pushNotifications',
    description: 'Browser push notifications for updates',
    enabled: true,
    environment: 'preview',
    updatedAt: '2024-12-28T15:10:00Z',
  },
  {
    id: 'ff-009',
    key: 'twoFactorAuth',
    description: 'Two-factor authentication via SMS or app',
    enabled: true,
    environment: 'production',
    updatedAt: '2024-12-25T10:00:00Z',
  },
  {
    id: 'ff-010',
    key: 'realtimeSync',
    description: 'Real-time data synchronization across devices',
    enabled: false,
    environment: 'development',
    updatedAt: '2024-12-20T17:30:00Z',
  },
];

export async function getFeatureFlags(): Promise<FeatureFlag[]> {
  const delay = Math.floor(Math.random() * 300) + 400;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockFeatureFlags]);
    }, delay);
  });
}
