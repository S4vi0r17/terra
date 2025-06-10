import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100 flex items-center justify-center p-4 relative overflow-hidden">
      <Outlet />
    </div>
  );
}
