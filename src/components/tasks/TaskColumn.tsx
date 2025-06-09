import type { DragEvent } from 'react';
import { TaskCard } from './TaskCard';
import type { Task, TaskStatus } from '@/interfaces/tasks/task.interface';

interface Props {
  title: string;
  icon: string;
  color: string;
  tasks: Task[];
  status: TaskStatus;
  draggedTask: string | null;
  sourceColumn: string | null;
  onDragOver: (e: DragEvent) => void;
  onDrop: (e: DragEvent, status: TaskStatus) => void;
  onDragStart: (e: DragEvent, taskId: string, columnId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export const TaskColumn = ({
  title,
  icon,
  color,
  tasks,
  status,
  draggedTask,
  sourceColumn,
  onDragOver,
  onDrop,
  onDragStart,
  onDeleteTask,
}: Props) => (
  <div
    className={`
      bg-white rounded-2xl p-6 border-2 shadow-sm min-h-96 transition-all duration-200
      ${
        draggedTask && sourceColumn === status
          ? 'border-dashed border-stone-400 bg-stone-50'
          : draggedTask && sourceColumn !== status
          ? 'border-dashed border-amber-500 bg-amber-100'
          : 'border-stone-200'
      }
    `}
    onDragOver={onDragOver}
    onDrop={(e) => onDrop(e, status)}
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
        <TaskCard
          key={task.id}
          task={task}
          status={status}
          draggedTask={draggedTask}
          onDragStart={onDragStart}
          onDeleteTask={onDeleteTask}
        />
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
