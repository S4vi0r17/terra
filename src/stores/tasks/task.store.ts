import { create, type StateCreator } from 'zustand';
import type { Task } from '@/interfaces/tasks/task.interface';

interface TaskState {
  tasks: Record<string, Task>;

  getTasksByStatus: (status: 'pending' | 'progress' | 'completed') => Task[];
  addTask: (task: Task) => void;
  changeTaskStatus: (
    taskId: string,
    newStatus: 'pending' | 'progress' | 'completed'
  ) => void;
}

const taskStateCreator: StateCreator<TaskState> = (set, get) => ({
  tasks: {
    '1': {
      id: '1',
      title: 'Sample Task',
      description: 'This is a sample task description.',
      status: 'pending',
    },
    '2': {
      id: '2',
      title: 'Another Task',
      description: 'This is another task description.',
      status: 'progress',
    },
    '3': {
      id: '3',
      title: 'Completed Task',
      description: 'This task is already completed.',
      status: 'completed',
    },
    '4': {
      id: '4',
      title: 'New Task',
      description: 'This is a new task description.',
      status: 'pending',
    },
  },

  getTasksByStatus: (status) =>
    Object.values(get().tasks).filter((task) => task.status === status),

  addTask: (task) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        [task.id]: task,
      },
    }));
  },

  changeTaskStatus: (taskId, newStatus) => {
    set((state) => {
      const task = state.tasks[taskId];
      if (!task) return state; // Task not found

      return {
        tasks: {
          ...state.tasks,
          [taskId]: {
            ...task,
            status: newStatus,
          },
        },
      };
    });
  },
});

export const useTaskStore = create<TaskState>()(taskStateCreator);
