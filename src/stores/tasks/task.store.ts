import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Task } from '@/interfaces/tasks/task.interface';

interface TaskState {
  tasks: Record<string, Task>;

  draggedTask: string | null;
  setDraggedTask: (taskId: string | null) => void;

  getTasksByStatus: (status: 'pending' | 'progress' | 'completed') => Task[];
  addTask: (task: Task) => void;
  changeTaskStatus: (
    taskId: string,
    newStatus: 'pending' | 'progress' | 'completed'
  ) => void;
  deleteTask: (taskId: string) => void;
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

  draggedTask: null,
  setDraggedTask: (taskId) => {
    set({ draggedTask: taskId });
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

  deleteTask: (taskId) => {
    set((state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [taskId]: __, ...remainingTasks } = state.tasks;
      return { tasks: remainingTasks };
    });
  },
});

export const useTaskStore = create<TaskState>()(devtools(taskStateCreator));
