import { usePersonStore } from '@/stores/person/person.store';
import type { Person } from '@/interfaces/persons/person.interface';

export const PersonForm = () => {
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
  );
};
