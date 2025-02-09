import { create, StateCreator } from 'zustand';
import { v4 as uuid } from 'uuid';
import { devtools, persist } from 'zustand/middleware';
// import { produce } from 'immer';
import { immer } from 'zustand/middleware/immer';
import { Task, TaskStatus } from '../../interfaces';

interface TaskState {
  draggingTaskId: string | undefined;
  tasks: Record<string, Task>; // { [key: string]: Task }

  getTasksByStatus: (status: TaskStatus) => Task[];
  addTask: (title: string, status: TaskStatus) => void;

  setDraggingTaskId: (id: string) => void;
  removeDraggingTaskId: () => void;
  changeTaskStatus: (taskId: string, status: TaskStatus) => void;

  onTaskDrop: (status: TaskStatus) => void;
}

const storeApi: StateCreator<
  TaskState,
  [['zustand/persist', unknown], ['zustand/immer', never]]
> = (set, get) => ({
  draggingTaskId: undefined,
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: TaskStatus.OPEN },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: TaskStatus.IN_PROGRESS },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: TaskStatus.DONE },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: TaskStatus.OPEN },
  },
  getTasksByStatus: (status: TaskStatus) => {
    const tasks = get().tasks;
    return Object.values(tasks).filter((task) => task.status === status);
  },
  addTask: (title: string, status: TaskStatus) => {
    const id = uuid();

    set((state) => {
      state.tasks[id] = { id, title, status };
    });

    //? Requiere npm install immer
    // set(
    //   produce((state: TaskState) => {
    //     state.tasks[id] = { id, title, status };
    //   })
    // );

    //? Forma nativa de zustand
    // set({
    //   tasks: {
    //     ...get().tasks,
    //     [id]: { id, title, status },
    //   },
    // });
  },
  setDraggingTaskId: (id: string) => set({ draggingTaskId: id }),
  removeDraggingTaskId: () => set({ draggingTaskId: undefined }),
  changeTaskStatus: (taskId: string, status: TaskStatus) => {
    const tasks = get().tasks;
    const task = tasks[taskId];

    if (task) {
      set((state) => {
        state.tasks[taskId].status = status;
      });

      //   set({
      //     tasks: {
      //       ...tasks,
      //       [taskId]: { ...task, status },
      //     },
      //   });
    }
  },
  onTaskDrop: (status: TaskStatus) => {
    const draggingTaskId = get().draggingTaskId;

    if (draggingTaskId) {
      get().changeTaskStatus(draggingTaskId, status);
      get().removeDraggingTaskId();
    }
  },
});

export const useTaskStore = create<TaskState>()(
  devtools(persist(immer(storeApi), { name: 'task-store' }))
);
