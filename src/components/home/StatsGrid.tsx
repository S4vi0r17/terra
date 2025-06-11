import { useShallow } from 'zustand/shallow';
import {
  useBearStore,
  usePersonStore,
  useTaskStore,
  useWeddingBoundStore,
} from '@/stores';

export const StatsGrid = () => {
  const totalBears = useBearStore((state) => state.totalBears());
  const people = usePersonStore((state) => state.persons);
  const tasks = useTaskStore(useShallow((state) => Object.values(state.tasks)));
  const guests = useWeddingBoundStore((state) => state.guests);

  let totalGuests: number = 0;

  for (const guest of guests) {
    if (guest.attendance === 'yes') {
      totalGuests += guest.guestCount;
    }
  }

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
  );
};
