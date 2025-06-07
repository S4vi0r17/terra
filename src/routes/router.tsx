import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../RootLayout';
import { DashboardLayout } from '../layouts';
import { BearsPage } from '../pages/BearsPage';

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
            path: 'person',
            // element: <PersonPage />,
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
