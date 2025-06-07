import type { BearType } from '@/interfaces/bears/bear.interface';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  bearTypes: { type: BearType; name: string; icon: string }[];
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<BearType>>;
}

export const BearTypeSelector = ({
  bearTypes,
  selectedType,
  setSelectedType,
}: Props) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-stone-700 mb-3">
        Selecciona el tipo de oso:
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {bearTypes.map((bearType) => (
          <button
            key={bearType.type}
            onClick={() => setSelectedType(bearType.type)}
            className={`
              flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200
              ${
                selectedType === bearType.type
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-stone-200 hover:border-stone-300'
              }
            `}
          >
            <span className="text-2xl">{bearType.icon}</span>
            <span className="font-medium text-stone-700">{bearType.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
