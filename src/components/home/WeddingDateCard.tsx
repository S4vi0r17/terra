import { useWeddingBoundStore } from '@/stores';

export const WeddingDateCard = () => {
  const eventDateValue = useWeddingBoundStore((state) => state.eventDateValue);

  return (
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
  );
};
