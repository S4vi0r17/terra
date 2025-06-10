export const AuthFeatures = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center justify-center">
        <span className="mr-2">✨</span>
        Características
      </h2>

      {/* Features destacadas */}
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="text-3xl mr-4">🐻</div>
          <div>
            <h3 className="font-semibold text-green-700">Gestión de Osos</h3>
            <p className="text-xs text-green-600">
              Administra osos negros, polares y pandas
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
          <div className="text-3xl mr-4">✅</div>
          <div>
            <h3 className="font-semibold text-blue-700">Tareas Drag & Drop</h3>
            <p className="text-xs text-blue-600">
              Organiza tareas con arrastrar y soltar
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
          <div className="text-3xl mr-4">👥</div>
          <div>
            <h3 className="font-semibold text-purple-700">Gestión Personas</h3>
            <p className="text-xs text-purple-600">
              Registra y visualiza información personal
            </p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200">
          <div className="text-3xl mr-4">💒</div>
          <div>
            <h3 className="font-semibold text-pink-700">Planificación Boda</h3>
            <p className="text-xs text-pink-600">
              Gestiona invitados y confirmaciones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
