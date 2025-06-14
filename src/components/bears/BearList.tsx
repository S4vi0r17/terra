import { useShallow } from 'zustand/shallow';
import { useBearStore } from '@/stores';
import type { BearType } from '@/interfaces';

interface Props {
  bearTypes: { type: BearType; name: string; icon: string }[];
}

export function BearList({ bearTypes }: Props) {
  const bears = useBearStore(useShallow((state) => state.bears));
  const selectedType = useBearStore((state) => state.selectedBearType);

  const filtered = bears.filter((bear) => bear.type === selectedType);

  if (filtered.length === 0) return null;

  const bearType = bearTypes.find((bt) => bt.type === selectedType);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-stone-700 mb-4">
        Lista de {bearType?.name}:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filtered.map((bear) => (
          <div key={bear.id} className="bg-stone-50 rounded-lg p-3 text-center">
            <div className="text-2xl mb-1">{bearType?.icon}</div>
            <p className="text-sm font-medium text-stone-700">{bear.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
