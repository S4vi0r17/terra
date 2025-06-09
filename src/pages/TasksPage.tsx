import { useTaskStore } from '@/stores/tasks/task.store';
import {
  AddTaskForm,
  TaskColumn,
  TaskHeader,
  TaskInstructions,
} from '@/components/tasks';
import type { TaskStatus } from '@/interfaces/tasks/task.interface';
import { useShallow } from 'zustand/shallow';

export function TasksPage() {
  const taskColumns: {
    status: TaskStatus;
    title: string;
    color: string;
    icon: string;
  }[] = [
    {
      status: 'pending',
      title: 'Pendientes',
      color: 'from-red-500 to-rose-500',
      icon: '⏳',
    },
    {
      status: 'progress',
      title: 'En Desarrollo',
      color: 'from-yellow-500 to-amber-500',
      icon: '🔄',
    },
    {
      status: 'completed',
      title: 'Terminadas',
      color: 'from-green-500 to-emerald-500',
      icon: '✅',
    },
  ];

  const pendingTasks = useTaskStore(
    useShallow((state) => state.getTasksByStatus('pending'))
  );
  const progressTasks = useTaskStore(
    useShallow((state) => state.getTasksByStatus('progress'))
  );
  const completedTasks = useTaskStore(
    useShallow((state) => state.getTasksByStatus('completed'))
  );

  return (
    <div className="space-y-8">
      <TaskHeader />

      <AddTaskForm taskColumns={taskColumns} />

      {/* Task Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaskColumn
          status="pending"
          title="Pendientes"
          color="from-red-500 to-rose-500"
          icon="⏳"
          tasks={pendingTasks}
        />

        <TaskColumn
          status="progress"
          title="En Desarrollo"
          color="from-yellow-500 to-amber-500"
          icon="🔄"
          tasks={progressTasks}
        />

        <TaskColumn
          status="completed"
          title="Terminadas"
          color="from-green-500 to-emerald-500"
          icon="✅"
          tasks={completedTasks}
        />
      </div>

      {/* Instructions */}
      <TaskInstructions />
    </div>
  );
}
