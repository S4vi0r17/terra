export const AuthDemoCredentials = () => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-sm text-stone-500 mb-3">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-stone-300"></div>
          <span className="px-2">Credenciales Demo</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-stone-300"></div>
        </div>
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-stone-700">📧 Email:</span>
              <code className="bg-white px-2 py-1 rounded border border-stone-200 text-amber-600">
                test1@google.com
              </code>
            </div>
            <div className="hidden sm:block text-stone-400">|</div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-stone-700">
                🔑 Contraseña:
              </span>
              <code className="bg-white px-2 py-1 rounded border border-stone-200 text-amber-600">
                Abc123
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
