import { useWeddingBoundStore } from '@/stores';

export const WeddingSummaryCard = () => {
  const weddingGuests = useWeddingBoundStore((state) => state.guests);

  const getAttendanceStats = () => {
    const stats = { yes: 0, maybe: 0, no: 0, totalGuests: 0 };
    weddingGuests.forEach((guest) => {
      stats[guest.attendance]++;
      if (guest.attendance === 'yes') {
        stats.totalGuests += guest.guestCount;
      }
    });
    return stats;
  };

  const stats = getAttendanceStats();

  return (
    <>
      {stats.yes > 0 && (
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
          <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
            <span className="mr-2">📊</span>
            Resumen del Evento
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-emerald-700">
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.totalGuests}</p>
              <p className="text-sm">Total de asistentes confirmados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{stats.yes}</p>
              <p className="text-sm">Confirmaciones positivas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">
                {stats.yes > 0
                  ? Math.round((stats.yes / weddingGuests.length) * 100)
                  : 0}
                %
              </p>
              <p className="text-sm">Tasa de confirmación</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
