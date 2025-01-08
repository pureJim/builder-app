import { scan } from 'react-scan';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

if (process.env.NODE_ENV === 'development') {
  scan({
    enabled: true,

    log: false,

    showToolbar: true,
  });
}

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  </StrictMode>,
);

// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line no-console
  console.log(
    '%c Jim Stack App v0.1.0 (2025/01/07)',
    'background: #39c5bb; color: #fff; font-size: 16px; padding: 4px;',
  );
})();
