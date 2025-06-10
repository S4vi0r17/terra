import { Outlet } from 'react-router';
// import { useAuthStore } from '@/stores';

export function AuthLayout() {
  // const isLoading = useAuthStore((state) => state.isLoading);

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-stone-50 flex items-center justify-center">
  //       <div className="animate-pulse">
  //         <div className="w-16 h-16 bg-amber-200 rounded-full"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-orange-100 flex items-center justify-center p-4 relative overflow-hidden">
      <Outlet />
    </div>
  );
}
