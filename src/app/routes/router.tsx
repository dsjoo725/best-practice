import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { CalendarPage } from '@/page/calendar';
import { HomePage } from '@/page/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
  },
];

export const router = createBrowserRouter(routes);
