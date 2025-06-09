import { v4 as uuid } from 'uuid';
import { useWeddingBoundStore } from '@/stores';
import { formatDateDMY } from '@/utils/formatDateDMY.util';
import type { AttendanceStatus, WeddingGuest } from '@/interfaces';

export const WeddingGuestForm = () => {
  const firstName = useWeddingBoundStore((state) => state.firstName);
  const lastName = useWeddingBoundStore((state) => state.lastName);
  const guestCount = useWeddingBoundStore((state) => state.guestCount);
  const eventDate = useWeddingBoundStore((state) => state.eventDate);
  const eventTime = useWeddingBoundStore((state) => state.eventTime);
  const eventDateValue = useWeddingBoundStore((state) => state.eventDateValue);
  const attendance = useWeddingBoundStore((state) => state.attendance);
  const addGuest = useWeddingBoundStore((state) => state.addGuest);

  const setFirstName = useWeddingBoundStore((state) => state.setFirstName);
  const setLastName = useWeddingBoundStore((state) => state.setLastName);
  const setGuestCount = useWeddingBoundStore((state) => state.setGuestCount);
  const setEventDate = useWeddingBoundStore((state) => state.setEventDate);
  const setEventTime = useWeddingBoundStore((state) => state.setEventTime);
  const setAttendance = useWeddingBoundStore((state) => state.setAttendance);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (firstName.trim() && lastName.trim() && eventDateValue) {
      const newGuest: WeddingGuest = {
        id: uuid(),
        name: firstName.trim(),
        lastName: lastName.trim(),
        guestCount: guestCount,
        eventDate: formatDateDMY(eventDate()),
        eventTime: eventTime(),
        attendance: attendance,
      };
      addGuest(newGuest);
      setFirstName('');
      setLastName('');
      setGuestCount(0);
      setEventDate(new Date().toISOString().split('T')[0]);
      setEventTime(new Date().toTimeString().split(' ')[0]);
      setAttendance('yes');
    }
  };

  const attendanceOptions: {
    value: AttendanceStatus;
    label: string;
    icon: string;
    color: string;
  }[] = [
    {
      value: 'yes',
      label: 'Yes, I will attend',
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 'maybe',
      label: 'Maybe',
      icon: '🤔',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      value: 'no',
      label: 'No, I cannot attend',
      icon: '❌',
      color: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
        <span className="mr-2">📝</span>
        Registrar Invitado
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              placeholder="Nombre del invitado"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Apellido
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              placeholder="Apellido del invitado"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Cantidad de Invitados
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={guestCount}
            onChange={(e) => setGuestCount(Number.parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Fecha del Evento
            </label>
            <input
              type="date"
              value={eventDate()}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Hora del Evento
            </label>
            <input
              type="time"
              value={eventTime()}
              onChange={(e) => setEventTime(e.target.value)}
              className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">
            ¿Asistirás al evento?
          </label>
          <div className="space-y-3">
            {attendanceOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="attendance"
                  value={option.value}
                  checked={attendance === option.value}
                  onChange={(e) =>
                    setAttendance(e.target.value as AttendanceStatus)
                  }
                  className="w-4 h-4 text-pink-500 focus:ring-pink-500"
                />
                <span className="text-lg">{option.icon}</span>
                <span className="text-stone-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg"
        >
          Registrar Invitado
        </button>
      </form>
    </div>
  );
};
