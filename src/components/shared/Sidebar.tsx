import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';

export const Sidebar = () => {
  const location = useLocation();

  const user = { fullName: 'John Doe', email: 'asd@asd.com' };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: '/dashboard/home', label: 'Inicio', icon: '🏠' },
    { id: '/dashboard/bears', label: 'Osos', icon: '🐻' },
    { id: '/dashboard/people', label: 'Personas', icon: '👥' },
    { id: '/dashboard/tasks', label: 'Tareas', icon: '✅' },
    { id: '/dashboard/wedding', label: 'Boda', icon: '💒' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-xl shadow-lg border border-stone-200 cursor-pointer"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div className="w-full h-0.5 bg-stone-600"></div>
          <div className="w-full h-0.5 bg-stone-600"></div>
          <div className="w-full h-0.5 bg-stone-600"></div>
        </div>
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 top-0 h-full w-64 bg-white border-r border-stone-200 z-40 transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }
      `}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800">Terra</h1>
              <p className="text-xs text-stone-500">Dashboard</p>
            </div>
          </div>

          {/* User info */}
          <div className="bg-stone-50 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {user.fullName
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-stone-800 text-sm">
                  {user.fullName}
                </p>
                <p className="text-xs text-stone-500">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200
                  ${
                    location.pathname === item.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-stone-600 hover:bg-stone-100'
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            // onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
          >
            <span className="text-lg">🚪</span>
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </>
  );
};
