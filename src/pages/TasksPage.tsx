import { useState } from 'react';
import { useTaskStore } from '@/stores/tasks/task.store';
import {
  AddTaskForm,
  TaskColumn,
  TaskHeader,
  TaskInstructions,
} from '@/components/tasks';
import type { TaskStatus } from '@/interfaces/tasks/task.interface';

export function TasksPage() {
  const getTaksByStatus = useTaskStore((state) => state.getTasksByStatus);
  const addTask = useTaskStore((state) => state.addTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);

  const draggedTask = useTaskStore((state) => state.draggedTask);
  const setDraggedTask = useTaskStore((state) => state.setDraggedTask);

  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [sourceColumn, setSourceColumn] = useState<string | null>(null); // Nuevo estado para la columna de origen

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

  const onAddTask = (status: 'pending' | 'progress' | 'completed') => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now().toString(),
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        status,
      };
      addTask(task);
      setNewTask({ title: '', description: '' });
    }
  };

  // Función para eliminar una tarea
  const onDeleteTask = (taskId: string) => {
    deleteTask(taskId);
    if (draggedTask === taskId) {
      setDraggedTask(null); // Resetear si se elimina la tarea arrastrada
    }
  };

  const handleDragStart = (
    e: React.DragEvent,
    taskId: string,
    columnId: string
  ) => {
    setDraggedTask(taskId);
    setSourceColumn(columnId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (
    e: React.DragEvent,
    newStatus: 'pending' | 'progress' | 'completed'
  ) => {
    e.preventDefault();
    if (draggedTask) {
      changeTaskStatus(draggedTask, newStatus);
      setDraggedTask(null);
      setSourceColumn(null); // Resetear la columna de origen
    }
  };

  const onGetTasksByStatus = (status: 'pending' | 'progress' | 'completed') => {
    return getTaksByStatus(status);
  };

  return (
    <div className="space-y-8">
      <TaskHeader />

      <AddTaskForm
        taskColumns={taskColumns}
        newTask={newTask}
        setNewTask={setNewTask}
        onAddTask={onAddTask}
      />

      {/* Task Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TaskColumn
          status="pending"
          title="Pendientes"
          color="from-red-500 to-rose-500"
          icon="⏳"
          tasks={onGetTasksByStatus('pending')}
          draggedTask={draggedTask}
          sourceColumn={sourceColumn}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'pending')}
          onDeleteTask={onDeleteTask}
        />

        <TaskColumn
          status="progress"
          title="En Desarrollo"
          color="from-yellow-500 to-amber-500"
          icon="🔄"
          tasks={onGetTasksByStatus('progress')}
          draggedTask={draggedTask}
          sourceColumn={sourceColumn}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'progress')}
          onDeleteTask={onDeleteTask}
        />

        <TaskColumn
          status="completed"
          title="Terminadas"
          color="from-green-500 to-emerald-500"
          icon="✅"
          tasks={onGetTasksByStatus('completed')}
          draggedTask={draggedTask}
          sourceColumn={sourceColumn}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, 'completed')}
          onDeleteTask={onDeleteTask}
        />
      </div>

      {/* Instructions */}
      <TaskInstructions />
    </div>
  );
}
