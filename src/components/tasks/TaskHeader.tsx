export const TaskHeader = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
      <h1 className="text-3xl font-bold text-stone-800 mb-2 flex items-center">
        <span className="mr-3">✅</span>
        Gestión de Tareas
      </h1>
      <p className="text-stone-600">
        Organiza tus tareas con drag & drop y seguimiento de estado
      </p>
    </div>
  );
};
