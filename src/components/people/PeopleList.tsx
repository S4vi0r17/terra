import { usePersonStore } from '@/stores';

export const PeopleList = () => {
  const people = usePersonStore((state) => state.persons);

  return (
    people.length > 0 && (
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
    )
  );
};
