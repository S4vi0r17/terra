import { useWeddingBoundStore } from '@/stores';

export const WeddingStats = () => {
  const guests = useWeddingBoundStore((state) => state.guests);

  const attendanceOptions = [
    {
      value: 'yes',
      label: 'Sí, asistiré',
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 'maybe',
      label: 'Tal vez',
      icon: '🤔',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      value: 'no',
      label: 'No podré asistir',
      icon: '❌',
      color: 'from-red-500 to-rose-500',
    },
  ];

  const getAttendanceStats = () => {
    const stats = { yes: 0, maybe: 0, no: 0, totalGuests: 0 };
    guests.forEach((guest) => {
      stats[guest.attendance]++;
      if (guest.attendance === 'yes') {
        stats.totalGuests += guest.guestCount;
      }
    });
    return stats;
  };

  const stats = getAttendanceStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-stone-500">Total Invitados</p>
            <p className="text-2xl font-bold text-stone-800">
              {stats.totalGuests}
            </p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
            <span className="text-white">👥</span>
          </div>
        </div>
      </div>

      {attendanceOptions.map((option) => (
        <div
          key={option.value}
          className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500">{option.label}</p>
              <p className="text-2xl font-bold text-stone-800">
                {stats[option.value as keyof typeof stats]}
              </p>
            </div>
            <div
              className={`w-10 h-10 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center`}
            >
              <span className="text-white">{option.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
