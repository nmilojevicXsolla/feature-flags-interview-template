export function TaskPage() {
  return (
    <main>
      <section aria-labelledby="task-heading">
        <h1 id="task-heading">Feature Flags Admin UI</h1>
        <p>
          <strong>Time:</strong> 60 minutes | <strong>Focus:</strong> React,
          TypeScript, state management, UX
        </p>

        <hr />

        <h2>Overview</h2>
        <p>
          Build a Feature Flags Admin UI that fetches and displays feature flags
          from a mock API. The UI should allow filtering, searching, and
          toggling flags.
        </p>

        <h2>Data</h2>
        <ul>
          <li>
            Use the provided helper function <code>getFeatureFlags()</code> from{' '}
            <code>src/api/featureFlagsApi.ts</code>
          </li>
          <li>
            It returns <code>Promise&lt;FeatureFlag[]&gt;</code>
          </li>
        </ul>

        <h3>FeatureFlag Type</h3>
        <pre>
          <code>
{`type Environment = 'production' | 'preview' | 'development';

interface FeatureFlag {
  id: string;
  key: string;
  description: string;
  enabled: boolean;
  environment: Environment;
  updatedAt: string;
}`}
          </code>
        </pre>

        <h2>Requirements</h2>
        <ol>
          <li>
            <strong>Fetch &amp; Render:</strong> Fetch feature flags on component
            mount and display each flag showing:
            <ul>
              <li>Flag key</li>
              <li>Description</li>
              <li>Environment badge (production / preview / development)</li>
              <li>Enabled/disabled status</li>
              <li>Last updated time</li>
              <li>Toggle switch to change state</li>
            </ul>
          </li>
          <li>
            <strong>Filter by Environment:</strong> Provide filter options: All /
            Production / Preview / Development.
          </li>
          <li>
            <strong>Search:</strong> Provide a search input to filter by{' '}
            <code>key</code> (case-insensitive).
          </li>
          <li>
            <strong>Summary Counts:</strong> Display Total / Enabled / Disabled
            counts (derived from data, not hardcoded).
          </li>
          <li>
            <strong>Toggle State:</strong> Each feature flag must have a toggle
            to enable/disable it. When toggled, the change should be reflected
            immediately in the UI and counts. Changes are local only (not
            persisted to API).
          </li>
          <li>
            <strong>UX States:</strong> Handle loading, error (with Retry
            button), and empty results states.
          </li>
          <li>
            <strong>Accessibility:</strong> Use semantic HTML, labels for inputs,
            descriptive button text, and focusable controls.
          </li>
        </ol>

        <h2>Optional (If Time Permits)</h2>
        <ul>
          <li>
            <strong>Reset Overrides:</strong> Add a "Reset" button to revert all
            toggled flags back to their original API state.
          </li>
          <li>
            <strong>Memoization:</strong> Memoize derived filtering if needed for
            performance.
          </li>
        </ul>

        <h2>State Management</h2>
        <p>
          You may use <strong>any</strong> state management approach you prefer:
        </p>
        <ul>
          <li>React useState/useReducer</li>
          <li>React Context</li>
          <li>Redux Toolkit (already configured)</li>
          <li>Zustand, Jotai, or any other library</li>
        </ul>
        <p>
          Redux Toolkit is pre-installed and configured. See{' '}
          <code>src/app/store.ts</code> and <code>src/app/hooks.ts</code> for
          typed hooks (<code>useAppDispatch</code>, <code>useAppSelector</code>).
        </p>

        <h2>File Locations</h2>
        <ul>
          <li>
            <strong>Work Area:</strong>{' '}
            <code>src/pages/FeatureFlagsPage.tsx</code>
          </li>
          <li>
            <strong>API Helper:</strong>{' '}
            <code>src/api/featureFlagsApi.ts</code>
          </li>
          <li>
            <strong>Types:</strong> <code>src/types/featureFlags.ts</code>
          </li>
          <li>
            <strong>Redux Store:</strong> <code>src/app/store.ts</code>
          </li>
          <li>
            <strong>Redux Hooks:</strong> <code>src/app/hooks.ts</code>
          </li>
        </ul>

        <h2>Evaluation Criteria</h2>
        <ul>
          <li>Code organization and clarity</li>
          <li>Proper TypeScript usage</li>
          <li>State management approach</li>
          <li>Error handling and UX states</li>
          <li>Semantic HTML and accessibility basics</li>
          <li>Component composition</li>
        </ul>

        <hr />

        <p>
          <em>
            Navigate to the <strong>Work Area</strong> using the button in the
            header to begin implementing your solution. Good luck!
          </em>
        </p>
      </section>
    </main>
  );
}
