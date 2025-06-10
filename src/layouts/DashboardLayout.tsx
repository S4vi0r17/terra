import { Outlet } from 'react-router';
import { Sidebar } from '@/components/shared';

export function DashboardLayout() {
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
