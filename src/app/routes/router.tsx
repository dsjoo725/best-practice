import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { HomePage, SalesPage } from '@/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/sales',
    element: <SalesPage />,
  },
];

export const router = createBrowserRouter(routes);
