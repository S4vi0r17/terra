import { useState } from 'react';
import { useBearStore } from '@/stores/bears/bears.store';
import { BearCounters } from '@/components/bears/BearCounters';
import { BearActions } from '@/components/bears/BearActions';
import { BearList } from '@/components/bears/BearList';
import { BearTypeSelector } from '@/components/bears/BearTypeSelector';
import type { BearType } from '@/interfaces/bears/bear.interface';

export function BearsPage() {
  const bears = useBearStore((state) => state.bears);
  const addBear = useBearStore((state) => state.addBear);
  const doNothing = useBearStore((state) => state.doNothing);
  const clearBears = useBearStore((state) => state.clearBears);

  const [selectedType, setSelectedType] = useState<BearType>('black');

  const bearCounts = {
    black: bears.filter((bear) => bear.type === 'black').length,
    polar: bears.filter((bear) => bear.type === 'polar').length,
    panda: bears.filter((bear) => bear.type === 'panda').length,
  };

  const bearTypes = [
    {
      type: 'black' as const,
      name: 'Osos Negros',
      icon: '🐻',
      color: 'from-gray-700 to-gray-900',
    },
    {
      type: 'polar' as const,
      name: 'Osos Polares',
      icon: '🐻‍❄️',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      type: 'panda' as const,
      name: 'Osos Panda',
      icon: '🐼',
      color: 'from-green-500 to-emerald-600',
    },
  ];

  const onAddBear = () => {
    const newBear = {
      id: Date.now().toString(),
      name: `Oso ${bearCounts[selectedType] + 1}`,
      type: selectedType,
    };
    addBear(newBear);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-800 mb-2 flex items-center">
          <span className="mr-3">🐻</span>
          Gestión de Osos
        </h1>
        <p className="text-stone-600">
          Administra tu colección de osos y practica el renderizado de React
        </p>
      </div>

      <BearCounters bearTypes={bearTypes} bearCounts={bearCounts} />

      {/* Control Panel */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
          <span className="mr-2">🎮</span>
          Panel de Control
        </h2>

        <BearTypeSelector
          bearTypes={bearTypes}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <BearActions
          doNothing={doNothing}
          onAddBear={onAddBear}
          clearBears={clearBears}
        />

        <BearList
          bears={bears}
          bearTypes={bearTypes}
          selectedType={selectedType}
        />
      </div>
    </div>
  );
}
