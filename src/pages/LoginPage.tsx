import { LoginFrom } from '@/components/auth';

export function LoginPage() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-stone-200">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white font-bold text-xl">T</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-800 mb-2">Terra</h1>
        <p className="text-stone-600">Dashboard Minimalista</p>
      </div>

      <LoginFrom />

      <div className="mt-6 text-center">
        <p className="text-sm text-stone-500">
          Demo: cualquier email y contraseña
        </p>
      </div>
    </div>
  );
}
