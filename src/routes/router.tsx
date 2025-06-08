import { createBrowserRouter } from 'react-router';
import { RootLayout, DashboardLayout } from '@/layouts';
import { BearsPage, PeoplePage } from '@/pages';

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
            path: '',
            // element: <Dashboard />,
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
            // element: <JiraPage />,
          },
          {
            path: 'wedding-invitation',
            // element: <WeddingInvitationPage />,
          },
        ],
      },

      /// Auth Routes
      {
        path: 'auth',
        // element: <AuthLayout />,
        children: [
          {
            path: 'login',
            // element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
