export const AuthHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <span className="text-white font-bold text-2xl transform -rotate-3">
            T
          </span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-60"></div>
      </div>

      <h1 className="text-3xl font-bold bg-gradient-to-r from-stone-800 via-amber-700 to-orange-700 bg-clip-text text-transparent mb-2">
        Bienvenido a Terra
      </h1>
      <p className="text-stone-600 font-medium">
        Dashboard Minimalista & Sostenible
      </p>
      <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-3"></div>
    </div>
  );
};
