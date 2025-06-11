import { useAuthStore } from '@/stores';
import type { PrivateResponse } from '@/interfaces';

interface Props {
  privateResponse?: PrivateResponse;
}

export const SessionInfo = ({ privateResponse }: Props) => {
  const status = useAuthStore((state) => state.status);

  return (
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
                privateResponse?.ok
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {privateResponse?.ok ? 'Conectado' : 'Desconectado'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Mensaje:</span>
            <span className="text-stone-700">{privateResponse?.message}</span>
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
  );
};
