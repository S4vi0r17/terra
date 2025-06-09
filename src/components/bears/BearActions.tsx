import { useBearStore } from '@/stores';

export const BearActions = () => {
  const addBear = useBearStore((state) => state.addBear);
  const doNothing = useBearStore((state) => state.doNothing);
  const clearBears = useBearStore((state) => state.clearBears);

  const selectedBearType = useBearStore((state) => state.selectedBearType);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button
        onClick={doNothing}
        className="flex items-center justify-center space-x-2 p-4 bg-stone-100 text-stone-600 rounded-xl hover:bg-stone-200 transition-colors duration-200 cursor-pointer"
      >
        <span>⏸️</span>
        <span>No hacer nada</span>
      </button>
      <button
        onClick={() => addBear(selectedBearType)}
        className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg cursor-pointer"
      >
        <span>➕</span>
        <span>Agregar Oso</span>
      </button>
      <button
        onClick={clearBears}
        className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-xl hover:from-red-600 hover:to-rose-600 transition-all duration-200 shadow-lg cursor-pointer"
      >
        <span>🗑️</span>
        <span>Borrar Todos</span>
      </button>
    </div>
  );
};
