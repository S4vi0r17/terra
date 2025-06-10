import { Navigate, Outlet } from 'react-router';
import { Sidebar } from '@/components/shared';
import { useAuthStore } from '@/stores';

export function DashboardLayout() {
  const status = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (status === 'pending') {
    checkAuthStatus();

    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className="min-h-screen bg-stone-50 flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
