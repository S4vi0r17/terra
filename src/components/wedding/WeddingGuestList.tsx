import React from 'react'

export const WeddingGuestList = () => {
  return (
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
  )
}
