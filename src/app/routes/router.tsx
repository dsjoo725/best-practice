import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import { MyCalendarPage } from '@/page/my-calendar';
import { HomePage } from '@/page/home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/my-calendar',
    element: <MyCalendarPage />,
  },
];

export const router = createBrowserRouter(routes);
