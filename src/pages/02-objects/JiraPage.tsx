import { useShallow } from 'zustand/shallow';
import { useTaskStore } from '../../stores';
import { TaskStatus } from '../../interfaces';
import { JiraTasks } from '../../components';

export const JiraPage = () => {
  const openTasks = useTaskStore(useShallow((state) => state.getTasksByStatus(TaskStatus.OPEN)));

  const inProgressTasks = useTaskStore(useShallow((state) => state.getTasksByStatus(TaskStatus.IN_PROGRESS)));

  const doneTasks = useTaskStore(useShallow((state) => state.getTasksByStatus(TaskStatus.DONE)));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks
          title="Pendientes"
          tasks={openTasks}
          status={TaskStatus.OPEN}
        />

        <JiraTasks
          title="Avanzando"
          tasks={inProgressTasks}
          status={TaskStatus.IN_PROGRESS}
        />

        <JiraTasks
          title="Terminadas"
          tasks={doneTasks}
          status={TaskStatus.DONE}
        />
      </div>
    </>
  );
};
