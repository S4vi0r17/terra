import { useState } from 'react';

export function TasksPage() {
  //   const { state, dispatch } = useAppContext()
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const taskColumns = [
    {
      id: 'pending',
      title: 'Pendientes',
      color: 'from-red-500 to-rose-500',
      icon: '⏳',
    },
    {
      id: 'progress',
      title: 'En Desarrollo',
      color: 'from-yellow-500 to-amber-500',
      icon: '🔄',
    },
    {
      id: 'completed',
      title: 'Terminadas',
      color: 'from-green-500 to-emerald-500',
      icon: '✅',
    },
  ];

  const addTask = (status: 'pending' | 'progress' | 'completed') => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now().toString(),
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        status,
      };
      //   dispatch({ type: "ADD_TASK", payload: task })
      setNewTask({ title: '', description: '' });
    }
  };

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTask(taskId);
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
      //   dispatch({
      //     type: "UPDATE_TASK",
      //     payload: { id: draggedTask, status: newStatus },
      //   })
      setDraggedTask(null);
    }
  };

  //   const getTasksByStatus = (status: "pending" | "progress" | "completed") => {
  //     return state.tasks.filter((task) => task.status === status)
  //   }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h1 className="text-3xl font-bold text-stone-800 mb-2 flex items-center">
          <span className="mr-3">✅</span>
          Gestión de Tareas
        </h1>
        <p className="text-stone-600">
          Organiza tus tareas con drag & drop y seguimiento de estado
        </p>
      </div>

      {/* Add Task Form */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
        <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
          <span className="mr-2">➕</span>
          Agregar Nueva Tarea
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={newTask.title}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Título de la tarea"
            className="px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
          />
          <input
            type="text"
            value={newTask.description}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Descripción (opcional)"
            className="px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {taskColumns.map((column) => (
            <button
              key={column.id}
              //   onClick={() => addTask(column.id as any)}
              disabled={!newTask.title.trim()}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-xl text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                bg-gradient-to-r ${column.color} hover:shadow-lg
              `}
            >
              <span>{column.icon}</span>
              <span>Agregar a {column.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {taskColumns.map((column) => {
          //   const tasks = getTasksByStatus(column.id as any)
          return (
            <div
              key={column.id}
              className={`
                bg-white rounded-2xl p-6 border border-stone-200 shadow-sm min-h-96 transition-all duration-200
                ${draggedTask ? 'border-dashed border-2 border-amber-300' : ''}
              `}
              onDragOver={handleDragOver}
              //   onDrop={(e) => handleDrop(e, column.id as any)}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-stone-800 flex items-center">
                  <span className="mr-2">{column.icon}</span>
                  {column.title}
                </h3>
                <span
                  className={`
                  px-3 py-1 rounded-full text-sm font-medium text-white
                  bg-gradient-to-r ${column.color}
                `}
                >
                  {/* {tasks.length} */}
                </span>
              </div>

              <div className="space-y-3">
                {/* {tasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className={`
                      bg-stone-50 rounded-xl p-4 cursor-move hover:bg-stone-100 transition-all duration-200 border border-stone-200
                      ${draggedTask === task.id ? "opacity-50 scale-95" : "hover:shadow-md"}
                    `}
                  >
                    <h4 className="font-semibold text-stone-800 mb-1">{task.title}</h4>
                    {task.description && <p className="text-sm text-stone-600">{task.description}</p>}
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-stone-400">ID: {task.id}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                  </div>
                ))} */}

                {/* {tasks.length === 0 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-stone-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-stone-400 text-2xl">{column.icon}</span>
                    </div>
                    <p className="text-stone-500 text-sm">No hay tareas en {column.title.toLowerCase()}</p>
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
        <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center">
          <span className="mr-2">💡</span>
          Instrucciones
        </h3>
        <ul className="text-blue-700 space-y-1 text-sm">
          <li>• Arrastra las tareas entre columnas para cambiar su estado</li>
          <li>
            • Las tareas se pueden mover de pendiente → desarrollo → terminada
          </li>
          <li>
            • Usa el formulario superior para agregar nuevas tareas directamente
            a cualquier columna
          </li>
        </ul>
      </div>
    </div>
  );
}
