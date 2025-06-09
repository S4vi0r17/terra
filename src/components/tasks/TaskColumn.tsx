import { useState } from 'react';
import classNames from 'classnames';
import { TaskCard } from './TaskCard';
import { useTaskStore } from '@/stores';
import type { Task, TaskStatus } from '@/interfaces';

interface Props {
  title: string;
  icon: string;
  color: string;
  tasks: Task[];
  status: TaskStatus;
}

export const TaskColumn = ({ title, icon, color, tasks, status }: Props) => {
  const draggedTask = useTaskStore((state) => state.draggedTask);

  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);
  const setDraggedTask = useTaskStore((state) => state.setDraggedTask);

  const [onDragOver, setOnDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (e: React.DragEvent, newStatus: TaskStatus) => {
    e.preventDefault();
    if (draggedTask) {
      changeTaskStatus(draggedTask, newStatus);
      setDraggedTask(null);
    }
    setOnDragOver(false);
  };

  return (
    <div
      className={classNames(
        'bg-white rounded-2xl p-6 border-2 shadow-sm min-h-96 transition-all duration-200',
        'border-dashed',
        {
          'border-stone-400 !bg-stone-50': draggedTask && !onDragOver,
          '!border-amber-500 !bg-amber-50': draggedTask && onDragOver,
          '!border-stone-200': !draggedTask || !onDragOver,
        }
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, status)}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-stone-800 flex items-center">
          <span className="mr-2">{icon}</span>
          {title}
        </h3>
        <span
          className={`
          px-3 py-1 rounded-full text-sm font-medium text-white
          bg-gradient-to-r ${color}
        `}
        >
          {tasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {tasks.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-stone-400 text-2xl">{icon}</span>
            </div>
            <p className="text-stone-500 text-sm">
              No hay tareas en {title.toLowerCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
