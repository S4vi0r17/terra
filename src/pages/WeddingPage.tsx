import { useState } from 'react';

export function WeddingPage() {
  //   const { state, dispatch } = useAppContext()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    guestCount: 1,
    eventDate: '',
    eventTime: '',
    attendance: 'yes' as 'yes' | 'maybe' | 'no',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.lastName.trim() &&
      formData.eventDate &&
      formData.eventTime
    ) {
      const newGuest = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        lastName: formData.lastName.trim(),
        guestCount: formData.guestCount,
        eventDate: formData.eventDate,
        eventTime: formData.eventTime,
        attendance: formData.attendance,
      };
      //   dispatch({ type: "ADD_WEDDING_GUEST", payload: newGuest })
      setFormData({
        name: '',
        lastName: '',
        guestCount: 1,
        eventDate: '',
        eventTime: '',
        attendance: 'yes',
      });
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

  //   const getAttendanceStats = () => {
  //     const stats = { yes: 0, maybe: 0, no: 0, totalGuests: 0 }
  //     state.weddingGuests.forEach((guest) => {
  //       stats[guest.attendance]++
  //       if (guest.attendance === "yes") {
  //         stats.totalGuests += guest.guestCount
  //       }
  //     })
  //     return stats
  //   }

  //   const stats = getAttendanceStats()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <span className="mr-3">💒</span>
          Planificación de Boda
        </h1>
        <p className="text-pink-100">
          Gestiona las invitaciones y confirmaciones para tu día especial
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-stone-500">Total Invitados</p>
              {/* <p className="text-2xl font-bold text-stone-800">{state.weddingGuests.length}</p> */}
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
                {/* <p className="text-2xl font-bold text-stone-800">{stats[option.value as keyof typeof stats]}</p> */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
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
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange('lastName', e.target.value)
                  }
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
                value={formData.guestCount}
                onChange={(e) =>
                  handleInputChange(
                    'guestCount',
                    Number.parseInt(e.target.value)
                  )
                }
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
                  value={formData.eventDate}
                  onChange={(e) =>
                    handleInputChange('eventDate', e.target.value)
                  }
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
                  value={formData.eventTime}
                  onChange={(e) =>
                    handleInputChange('eventTime', e.target.value)
                  }
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
                      checked={formData.attendance === option.value}
                      onChange={(e) =>
                        handleInputChange('attendance', e.target.value)
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

        {/* Guest List */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
            <span className="mr-2">📋</span>
            {/* Lista de Invitados ({state.weddingGuests.length}) */}
          </h2>

          {/* {state.weddingGuests.length > 0 ? (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {state.weddingGuests.map((guest) => {
                const attendanceOption = attendanceOptions.find((opt) => opt.value === guest.attendance)
                return (
                  <div
                    key={guest.id}
                    className="bg-stone-50 rounded-xl p-4 hover:bg-stone-100 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-stone-800 flex items-center">
                          {guest.name} {guest.lastName}
                          <span className="ml-2 text-lg">{attendanceOption?.icon}</span>
                        </h3>
                        <div className="mt-2 space-y-1 text-sm text-stone-600">
                          <p>
                            👥 {guest.guestCount} persona{guest.guestCount > 1 ? "s" : ""}
                          </p>
                          <p>📅 {new Date(guest.eventDate).toLocaleDateString("es-ES")}</p>
                          <p>🕐 {guest.eventTime}</p>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${attendanceOption?.color}`}
                      >
                        {attendanceOption?.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-stone-400 text-2xl">💒</span>
              </div>
              <p className="text-stone-500">No hay invitados registrados aún</p>
            </div>
          )} */}
        </div>
      </div>

      {/* Summary Card */}
      {/* {stats.yes > 0 && (
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
                {stats.yes > 0 ? Math.round((stats.yes / state.weddingGuests.length) * 100) : 0}%
              </p>
              <p className="text-sm">Tasa de confirmación</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
