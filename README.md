# Feature Flags Interview

A React + TypeScript coding interview template for building a Feature Flags Admin UI.

## Quick Start

```bash
npm install
npm run dev
```

## Interview Instructions

1. **Read the Task**: Open the **Task** page to review the full assignment requirements
2. **Implement**: Switch to the **Work Area** page to build your solution
3. **Time**: 60 minutes

## Project Structure

```
src/
├── app/
│   ├── store.ts          # Redux store (pre-configured)
│   └── hooks.ts          # Typed Redux hooks
├── api/
│   └── featureFlagsApi.ts # Mock API helper
├── types/
│   └── featureFlags.ts    # TypeScript types
├── pages/
│   ├── TaskPage.tsx       # Assignment instructions
│   └── FeatureFlagsPage.tsx # Work area (implement here)
├── features/
│   └── placeholder/
│       └── placeholderSlice.ts # Example Redux slice
├── App.tsx
├── main.tsx
└── index.css
```

## State Management

You can use **any** state management approach:

- React `useState` / `useReducer`
- React Context API
- **Redux Toolkit** (pre-installed and configured)
- Zustand, Jotai, or other libraries

### Using Redux (Optional)

Redux Toolkit is already set up. Import the typed hooks:

```tsx
import { useAppDispatch, useAppSelector } from './app/hooks';
```

## API Helper

The mock API is located at `src/api/featureFlagsApi.ts`:

```tsx
import { getFeatureFlags } from './api/featureFlagsApi';

// Returns Promise<FeatureFlag[]>
const flags = await getFeatureFlags();
```

To test error handling, uncomment the random error code in the API file.

## Tech Stack

- Vite
- React 18
- TypeScript
- Redux Toolkit (optional)

## Good Luck! 🚀

