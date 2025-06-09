import { useState, type DragEvent } from 'react';
import { useTaskStore } from '@/stores';
import type { TaskStatus } from '@/interfaces';

export const useTasks = () => {
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const [onDragOver, setOnDragOver] = useState(false);

  const changeTaskStatus = useTaskStore((state) => state.changeTaskStatus);
  const setDraggedTask = useTaskStore((state) => state.setDraggedTask);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (e: DragEvent, newStatus: TaskStatus) => {
    e.preventDefault();
    if (draggedTask) {
      changeTaskStatus(draggedTask, newStatus);
      setDraggedTask(null);
    }
    setOnDragOver(false);
  };

  return {
    draggedTask,
    onDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    changeTaskStatus,
    setDraggedTask,
  };
};
