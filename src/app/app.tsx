import { RouterProvider } from 'react-router-dom';

import { QueryProvider } from './provider/query-provider';
import { ThemeProvider } from './provider/theme-provider';
import { router } from './routes/router';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ThemeProvider>
  );
};
