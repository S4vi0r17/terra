import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { tesloApi } from '@/apis';
import {
  useAuthStore,
  useBearStore,
  usePersonStore,
  useTaskStore,
  useWeddingBoundStore,
} from '@/stores';
import type { PrivateResponse } from '@/interfaces';

export function HomePage() {
  const totalBears = useBearStore((state) => state.totalBears());
  const people = usePersonStore((state) => state.persons);
  const tasks = useTaskStore(useShallow((state) => Object.values(state.tasks)));
  const guests = useWeddingBoundStore((state) => state.guests);
  const eventDateValue = useWeddingBoundStore((state) => state.eventDateValue);
  const status = useAuthStore((state) => state.status);

  const [mockRequest, setMockRequest] = useState<PrivateResponse>();

  let totalGuests: number = 0;

  for (const guest of guests) {
    if (guest.attendance === 'yes') {
      totalGuests += guest.guestCount;
    }
  }

  useEffect(() => {
    tesloApi
      .get<PrivateResponse>('/auth/private')
      .then((response) => {
        setMockRequest(response.data);
        console.log('API request successful:', response.data);
      })
      .catch((error) => {
        console.error('Error in API request:', error);
      });
  }, []);

  const stats = [
    {
      title: 'Total Osos',
      value: totalBears,
      icon: '🐻',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Personas',
      value: people.length,
      icon: '👥',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Tareas',
      value: tasks.length,
      icon: '✅',
      color: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Invitados Boda',
      value: totalGuests,
      icon: '💒',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-800 mb-2">
          ¡Bienvenido, {mockRequest?.user.fullName || 'Usuario'}! 👋
        </h1>
        <p className="text-stone-600">
          Aquí tienes un resumen de tu dashboard Terra
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
              >
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <span className="text-3xl font-bold text-stone-800">
                {stat.value}
              </span>
            </div>
            <h3 className="text-stone-600 font-medium">{stat.title}</h3>
          </div>
        ))}
      </div>

      {/* Wedding Date Card */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
            <span className="text-3xl">💒</span>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Fecha de la Boda</h3>
            <p className="text-pink-100">
              {new Date(eventDateValue).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Request Information */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Información de la Sesión
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Info */}
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <h3 className="font-semibold text-stone-700 mb-2">
                Usuario Autenticado
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">ID:</span>
                  <span className="text-stone-700 font-mono text-xs">
                    {mockRequest?.user.id || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Email:</span>
                  <span className="text-stone-700">
                    {mockRequest?.user.email || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Nombre:</span>
                  <span className="text-stone-700">
                    {mockRequest?.user.fullName || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Estado:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      mockRequest?.user.isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {mockRequest?.user.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Roles:</span>
                  <div className="flex space-x-1">
                    {mockRequest?.user.roles.map((role, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Session Info */}
          <div className="space-y-4">
            <div className="bg-stone-50 rounded-xl p-4">
              <h3 className="font-semibold text-stone-700 mb-2">
                Información de Sesión
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Estado:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      mockRequest?.ok
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {mockRequest?.ok ? 'Conectado' : 'Desconectado'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Mensaje:</span>
                  <span className="text-stone-700">{mockRequest?.message}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Timestamp:</span>
                  <span className="text-stone-700 font-mono text-xs">
                    {new Date().toLocaleString('es-ES')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Autenticación:</span>
                  <span className="text-stone-700">{status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
