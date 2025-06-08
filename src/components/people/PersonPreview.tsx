import { usePersonStore } from '@/stores/person/person.store';

export const PersonPreview = () => {
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const image = usePersonStore((state) => state.image);

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
        <span className="mr-2">👁️</span>
        Vista Previa
      </h2>

      {firstName || lastName ? (
        <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-xl p-6 border border-stone-200">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {firstName.charAt(0)}
                  {lastName.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-800">
                {firstName} {lastName}
              </h3>
              <p className="text-stone-600">Vista previa en tiempo real</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-stone-50 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-stone-400 text-2xl">👤</span>
          </div>
          <p className="text-stone-500">
            Completa el formulario para ver la vista previa
          </p>
        </div>
      )}
    </div>
  );
};
