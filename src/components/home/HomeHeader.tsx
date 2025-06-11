import type { PrivateResponse } from '@/interfaces';

interface Props {
  privateResponse?: PrivateResponse;
}

export const HomeHeader = ({ privateResponse }: Props) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">
        ¡Bienvenido, {privateResponse?.user.fullName}! 👋
      </h1>
      <p className="text-stone-600">
        Aquí tienes un resumen de tu dashboard Terra
      </p>
    </div>
  );
};
