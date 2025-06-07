import { BearCounters } from '@/components/bears/BearCounters';
import { BearActions } from '@/components/bears/BearActions';
import { BearTypeSelector } from '@/components/bears/BearTypeSelector';
import { BearList } from '@/components/bears/BearList';

export function BearsPage() {
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

      <BearCounters bearTypes={bearTypes} />

      {/* Control Panel */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h2 className="text-xl font-bold text-stone-800 mb-6 flex items-center">
          <span className="mr-2">🎮</span>
          Panel de Control
        </h2>

        <BearTypeSelector bearTypes={bearTypes} />

        <BearActions />

        <BearList bearTypes={bearTypes} />
      </div>
    </div>
  );
}
