import { useShallow } from 'zustand/shallow';
import type { BearType } from '@/interfaces/bears/bear.interface';
import { useBearStore } from '@/stores/bears/bears.store';

interface Props {
  bearTypes: { type: BearType; name: string; icon: string; color: string }[];
}

export const BearCounters = ({ bearTypes }: Props) => {
  const bearCounts = useBearStore(
    useShallow((state) => ({
      black: state.bears.filter((b) => b.type === 'black').length,
      polar: state.bears.filter((b) => b.type === 'polar').length,
      panda: state.bears.filter((b) => b.type === 'panda').length,
    }))
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {bearTypes.map((bearType) => (
        <div
          key={bearType.type}
          className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${bearType.color} rounded-xl flex items-center justify-center`}
            >
              <span className="text-3xl">{bearType.icon}</span>
            </div>
            <span className="text-4xl font-bold text-stone-800">
              {bearCounts[bearType.type]}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-stone-700">
            {bearType.name}
          </h3>
          <p className="text-stone-500 text-sm mt-1">
            {bearCounts[bearType.type]} osos registrados
          </p>
        </div>
      ))}
    </div>
  );
};
