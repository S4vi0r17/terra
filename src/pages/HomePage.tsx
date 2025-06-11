import { useEffect, useState } from 'react';
import { tesloApi } from '@/apis';
import {
  HomeHeader,
  SessionInfo,
  StatsGrid,
  UserInfo,
  WeddingDateCard,
} from '@/components/home';
import type { PrivateResponse } from '@/interfaces';

export function HomePage() {
  const [privateResponse, setPrivateResponse] = useState<PrivateResponse>();

  useEffect(() => {
    tesloApi
      .get<PrivateResponse>('/auth/private')
      .then((response) => {
        setPrivateResponse(response.data);
        console.log('API request successful:', response.data);
      })
      .catch((error) => {
        console.error('Error in API request:', error);
      });
  }, []);

  return (
    <div className="space-y-8">
      <HomeHeader privateResponse={privateResponse} />

      <StatsGrid />

      <WeddingDateCard />

      {/* Request Information */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Información de la Sesión
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserInfo privateResponse={privateResponse} />

          <SessionInfo privateResponse={privateResponse} />
        </div>
      </div>
    </div>
  );
}
