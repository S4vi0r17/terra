import { createBrowserRouter } from 'react-router';
import { RootLayout, DashboardLayout, AuthLayout } from '@/layouts';
import {
  HomePage,
  BearsPage,
  PeoplePage,
  TasksPage,
  WeddingPage,
} from '@/pages';
import { LoginPage } from '@/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      /// Dashboard Routes
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: 'home',
            element: <HomePage />,
          },
          {
            path: 'bears',
            element: <BearsPage />,
          },
          {
            path: 'people',
            element: <PeoplePage />,
          },
          {
            path: 'tasks',
            element: <TasksPage />,
          },
          {
            path: 'wedding',
            element: <WeddingPage />,
          },
        ],
      },
      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
