import { DragEvent, useState } from 'react';
import Swal from 'sweetalert2';
import { useTaskStore } from '../stores';
import { TaskStatus } from '../interfaces';

interface Options {
  status: TaskStatus;
}

export const useTasks = ({ status }: Options) => {
  const isDraggingTask = useTaskStore((state) => !!state.draggingTaskId);
  const onTaskDrop = useTaskStore((state) => state.onTaskDrop);
  const addTask = useTaskStore((state) => state.addTask);
  const [onDragOver, setOnDragOver] = useState(false);

  const handleAddTask = async () => {
    const { isConfirmed, value: taskTitle } = await Swal.fire({
      title: 'Nueva tarea',
      input: 'text',
      inputLabel: 'Nombre de la tarea',
      inputPlaceholder: 'Ingrese el nombre de la tarea',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'El nombre de la tarea es requerido';
        }
      },
    });

    if (isConfirmed && taskTitle) {
      addTask(taskTitle, status);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };

  return {
    isDraggingTask,
    onDragOver,

    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
