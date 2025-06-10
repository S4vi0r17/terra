import { useAuthStore } from '@/stores';
import { Navigate, Outlet } from 'react-router';

export function AuthLayout() {
  const status = useAuthStore((state) => state.status);

  if (status === 'authenticated') {
    return <Navigate to="/dashboard/home" replace />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100 flex items-center justify-center p-4 relative overflow-hidden">
      <Outlet />
    </div>
  );
}
