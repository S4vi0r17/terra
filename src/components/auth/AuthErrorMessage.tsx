import { useAuthStore } from '@/stores';

export const AuthErrorMessage = () => {
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const setErrorMessage = useAuthStore((state) => state.setErrorMessage);

  return (
    <>
      {errorMessage && (
        <div className="mb-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl p-4 relative animate-pulse">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">!</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-red-800 font-semibold text-sm mb-1">
                Error de Autenticación
              </h3>
              <p className="text-red-700 text-sm">{errorMessage}</p>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="flex-shrink-0 w-6 h-6 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors duration-200"
              title="Cerrar mensaje"
            >
              <span className="text-red-600 text-sm font-bold">×</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-b-2xl"></div>
        </div>
      )}
    </>
  );
};
