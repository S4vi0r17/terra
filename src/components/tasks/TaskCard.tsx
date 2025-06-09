import type { DragEvent } from 'react';
import type { Task, TaskStatus } from '@/interfaces/tasks/task.interface';

interface Props {
  task: Task;
  status: TaskStatus;
  draggedTask: string | null;
  onDragStart: (e: DragEvent, taskId: string, columnId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskCard = ({
  task,
  status,
  draggedTask,
  onDragStart,
  onDeleteTask,
}: Props) => (
  <div
    draggable
    onDragStart={(e) => onDragStart(e, task.id, status)}
    className={`
      bg-stone-50 rounded-xl p-4 cursor-move hover:bg-stone-100 transition-all duration-200 border border-stone-200
      ${draggedTask === task.id ? 'opacity-50 scale-95' : 'hover:shadow-md'}
      relative group
    `}
  >
    <h4 className="font-semibold text-stone-800 mb-1 pr-6">{task.title}</h4>
    {task.description && (
      <p className="text-sm text-stone-600">{task.description}</p>
    )}
    <div className="mt-2 flex items-center justify-between">
      <span className="text-xs text-stone-400">ID: {task.id}</span>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
    </div>
    <button
      onClick={() => onDeleteTask(task.id)}
      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-200"
      title="Eliminar tarea"
    >
      ×
    </button>
  </div>
);
