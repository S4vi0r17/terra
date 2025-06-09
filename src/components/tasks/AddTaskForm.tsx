import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useTaskStore } from '@/stores';
import type { TaskStatus } from '@/interfaces';

interface Props {
  taskColumns: {
    status: TaskStatus;
    title: string;
    color: string;
    icon: string;
  }[];
}

export const AddTaskForm = ({ taskColumns }: Props) => {
  const addTask = useTaskStore((state) => state.addTask);

  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const onAddTask = (status: 'pending' | 'progress' | 'completed') => {
    if (newTask.title.trim()) {
      const task = {
        id: uuid(),
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        status,
      };
      addTask(task);
      setNewTask({ title: '', description: '' });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
        <span className="mr-2">➕</span>
        Agregar Nueva Tarea
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={newTask.title}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Título de la tarea"
          className="px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
        <input
          type="text"
          value={newTask.description}
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, description: e.target.value }))
          }
          placeholder="Descripción (opcional)"
          className="px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {taskColumns.map((column) => (
          <button
            key={column.status}
            onClick={() => onAddTask(column.status)}
            disabled={!newTask.title.trim()}
            className={`
                  flex items-center space-x-2 px-4 py-2 rounded-xl text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                  bg-gradient-to-r ${column.color} hover:shadow-lg
                `}
          >
            <span>{column.icon}</span>
            <span>Agregar a {column.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
