import { Outlet } from 'react-router';
import { Sidebar } from '../shared/components/Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-stone-50 flex">
      <Sidebar
        activeTab={''}
        setActiveTab={(tab: string) => {}}
        onLogout={() => {}}
        user={{
          fullName: 'John Doe',
          email: 'asd@asd.com',
        }}
      />
      <main className="flex-1 lg:ml-64">
        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
