import {
  AuthBackground,
  AuthDemoCredentials,
  AuthErrorMessage,
  AuthFeatures,
  AuthFooter,
  AuthHeader,
  LoginFrom,
} from '@/components/auth';

export function LoginPage() {
  return (
    <>
      <AuthBackground />
      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <AuthHeader />

            {/* Mensaje de error */}
            <AuthErrorMessage />

            {/* Formulario de inicio de sesión */}
            <LoginFrom />

            {/* Credenciales de ejemplo */}
            <AuthDemoCredentials />
          </div>

          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col justify-between">
            <AuthFeatures />

            <AuthFooter />
          </div>
        </div>
      </div>
    </>
  );
}
