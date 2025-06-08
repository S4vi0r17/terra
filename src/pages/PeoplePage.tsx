import { usePersonStore } from '@/stores/person/person.store';
import type { Person } from '@/interfaces/persons/person.interface';

export function PeoplePage() {
  const people = usePersonStore((state) => state.persons);
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const image = usePersonStore((state) => state.image);
  const setFirstName = usePersonStore((state) => state.setFirstName);
  const setLastName = usePersonStore((state) => state.setLastName);
  const setImage = usePersonStore((state) => state.setImage);
  const addPerson = usePersonStore((state) => state.addPerson);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      const newPerson: Person = {
        id: Date.now().toString(),
        firstName,
        lastName,
        image,
      };

      addPerson(newPerson);

      setFirstName('');
      setLastName('');
      setImage('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-800 mb-2 flex items-center">
          <span className="mr-3">👥</span>
          Gestión de Personas
        </h1>
        <p className="text-stone-600">
          Registra personas y visualiza su información en tiempo real
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
            <span className="mr-2">📝</span>
            Registrar Persona
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Ingresa el nombre"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Apellido
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Ingresa el apellido"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                URL de Imagen (opcional)
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg cursor-pointer"
            >
              Agregar Persona
            </button>
          </form>
        </div>

        {/* Preview */}
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
      </div>

      {/* People List */}
      {people.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
            <span className="mr-2">📋</span>
            Personas Registradas ({people.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {people.map((person) => (
              <div
                key={person.id}
                className="bg-stone-50 rounded-xl p-4 hover:bg-stone-100 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center overflow-hidden">
                    {person.image ? (
                      <img
                        src={person.image || '/placeholder.svg'}
                        alt={`${person.firstName} ${person.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-medium text-sm">
                        {person.firstName.charAt(0)}
                        {person.lastName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800">
                      {person.firstName} {person.lastName}
                    </h3>
                    <p className="text-xs text-stone-500">ID: {person.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
