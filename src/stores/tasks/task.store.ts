import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Task, TaskStatus } from '@/interfaces';

interface TaskState {
  tasks: Record<string, Task>;

  draggedTask: string | null;
  setDraggedTask: (taskId: string | null) => void;

  getTasksByStatus: (status: TaskStatus) => Task[];
  addTask: (task: Task) => void;
  changeTaskStatus: (taskId: string, newStatus: TaskStatus) => void;
  deleteTask: (taskId: string) => void;
}

const taskStateCreator: StateCreator<TaskState, [['zustand/immer', never]]> = (
  set,
  get
) => ({
  tasks: {
    'ba0caae7-e9ea-4f4c-98d7-014be99b22cc': {
      id: 'ba0caae7-e9ea-4f4c-98d7-014be99b22cc',
      title: 'Sample Task',
      description: 'This is a sample task description.',
      status: 'pending',
    },
    'b5ed673a-3329-44c7-b423-dfa3c0144c04': {
      id: 'b5ed673a-3329-44c7-b423-dfa3c0144c04',
      title: 'Another Task',
      description: 'This is another task description.',
      status: 'progress',
    },
    '09860c14-dd76-445b-97b5-0e4ab83203f2': {
      id: '09860c14-dd76-445b-97b5-0e4ab83203f2',
      title: 'Completed Task',
      description: 'This task is already completed.',
      status: 'completed',
    },
    'e03428ce-238f-4d34-a7fc-5e11caef0030': {
      id: 'e03428ce-238f-4d34-a7fc-5e11caef0030',
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

  // Using immer from zustand middleware
  addTask: (task) => {
    set((state) => {
      state.tasks[task.id] = task; // Directly mutate the state
    });
  },

  /* Using immer(produce) `bun add immer` */
  // addTask: (task) => {
  //   set(
  //     produce((state: TaskState) => {
  //       state.tasks[task.id] = task;
  //     })
  //   );
  // },

  /* Without immer */
  // addTask: (task) => {
  //   set((state) => ({
  //     tasks: {
  //       ...state.tasks,
  //       [task.id]: task,
  //     },
  //   }));
  // },

  changeTaskStatus: (taskId, newStatus) => {
    set((state) => {
      // const task = state.tasks[taskId];
      // if (!task) return state; // Task not found

      // return {
      //   tasks: {
      //     ...state.tasks,
      //     [taskId]: {
      //       ...task,
      //       status: newStatus,
      //     },
      //   },
      // };

      // Directly mutate the state using immer
      state.tasks[taskId].status = newStatus;
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

export const useTaskStore = create<TaskState>()(
  devtools(
    persist(immer(taskStateCreator), {
      name: 'task-store',
    })
  )
);
