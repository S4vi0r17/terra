import { useTaskStore } from '@/stores/tasks/task.store';
import type { Task } from '@/interfaces/tasks/task.interface';

interface Props {
  task: Task;
}

export const TaskCard = ({ task }: Props) => {
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const setDraggedTask = useTaskStore((state) => state.setDraggedTask);

  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const onDeleteTask = (taskId: string) => {
    deleteTask(taskId);
    if (draggedTask === taskId) {
      setDraggedTask(null);
    }
  };

  return (
    <div
      draggable
      onDragStart={() => handleDragStart(task.id)}
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
        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-200 cursor-pointer"
        title="Eliminar tarea"
      >
        ×
      </button>
    </div>
  );
};
