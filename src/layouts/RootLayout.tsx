import { Navigate, Outlet, useLocation } from 'react-router';

export function RootLayout() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Navigate to="/dashboard/home" />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
}
