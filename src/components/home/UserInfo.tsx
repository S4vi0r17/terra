import type { PrivateResponse } from '@/interfaces';

interface Props {
  privateResponse?: PrivateResponse;
}

export const UserInfo = ({ privateResponse }: Props) => {
  return (
    <div className="space-y-4">
      <div className="bg-stone-50 rounded-xl p-4">
        <h3 className="font-semibold text-stone-700 mb-2">
          Usuario Autenticado
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-stone-500">ID:</span>
            <span className="text-stone-700 font-mono text-xs">
              {privateResponse?.user.id || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Email:</span>
            <span className="text-stone-700">
              {privateResponse?.user.email || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Nombre:</span>
            <span className="text-stone-700">
              {privateResponse?.user.fullName || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Estado:</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                privateResponse?.user.isActive
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {privateResponse?.user.isActive ? 'Activo' : 'Inactivo'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-500">Roles:</span>
            <div className="flex space-x-1">
              {privateResponse?.user.roles.map((role, index) => (
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
  );
};
