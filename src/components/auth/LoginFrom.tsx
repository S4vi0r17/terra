import { useAuthStore } from '@/stores';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const LoginFrom = () => {
  const navigate = useNavigate();

  const isLoading = useAuthStore((state) => state.isLoading);
  const login = useAuthStore((state) => state.login);
  const status = useAuthStore((state) => state.status);
  const errorMessage = useAuthStore((state) => state.errorMessage);
  const setErrorMessage = useAuthStore((state) => state.setErrorMessage);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(isLoading);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password);

    if (status === 'authenticated' && !isLoading && !errorMessage) {
      navigate('/dashboard/home');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <label className="text-sm font-semibold text-stone-700 mb-2 flex items-center">
            <span className="mr-2">📧</span>
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMessage) setErrorMessage(null); // Limpiar error al escribir
            }}
            className={`w-full px-4 py-4 bg-white/50 border-2 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-stone-400 backdrop-blur-sm ${
              errorMessage ? 'border-red-300' : 'border-stone-200'
            }`}
            placeholder="tu@email.com"
            required
          />
          <div
            className={`w-2 h-2 rounded-full opacity-60 ${
              errorMessage
                ? 'bg-gradient-to-r from-red-400 to-rose-500'
                : 'bg-gradient-to-r from-amber-400 to-orange-500'
            }`}
          ></div>
        </div>

        <div className="relative">
          <label className="text-sm font-semibold text-stone-700 mb-2 flex items-center">
            <span className="mr-2">🔒</span>
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errorMessage) setErrorMessage(null);
            }}
            className={`w-full px-4 py-4 bg-white/50 border-2 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 placeholder-stone-400 backdrop-blur-sm ${
              errorMessage ? 'border-red-300' : 'border-stone-200'
            }`}
            placeholder="••••••••"
            required
          />
          <div
            className={`w-2 h-2 rounded-full opacity-60 ${
              errorMessage
                ? 'bg-gradient-to-r from-red-400 to-rose-500'
                : 'bg-gradient-to-r from-green-400 to-emerald-500'
            }`}
          ></div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Iniciando sesión...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
            <span>Iniciar Sesión</span>
            <span className="text-xl">🚀</span>
          </div>
        )}
      </button>
    </form>
  );
};
