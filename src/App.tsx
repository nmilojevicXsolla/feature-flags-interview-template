import { useState } from 'react';
import { TaskPage } from './pages/TaskPage';
import { FeatureFlagsPage } from './pages/FeatureFlagsPage';

type Page = 'task' | 'work';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('task');

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo-section">
            <img
              src="https://storage.googleapis.com/strapi-v2-bucket-prod/xsolla_blog_xsolla_rebrand_cover_image_2112x1146_revised_69ca0c7b88/xsolla_blog_xsolla_rebrand_cover_image_2112x1146_revised_69ca0c7b88.webp"
              style={{ width: 200, height: 'auto' }}
              alt="Xsolla"
            />
          </div>
          <h3>Welcome to the Coding Session</h3>
        </div>
        <nav aria-label="Main navigation">
          <button
            type="button"
            onClick={() => setCurrentPage('task')}
            aria-current={currentPage === 'task' ? 'page' : undefined}
            className={currentPage === 'task' ? 'active' : ''}
          >
            Task
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('work')}
            aria-current={currentPage === 'work' ? 'page' : undefined}
            className={currentPage === 'work' ? 'active' : ''}
          >
            Work Area
          </button>
        </nav>
      </header>

      {currentPage === 'task' && <TaskPage />}
      {currentPage === 'work' && <FeatureFlagsPage />}
    </>
  );
}

export default App;

