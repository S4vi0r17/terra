export const TaskInstructions = () => {
  return (
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
          • Usa el formulario superior para agregar nuevas tareas directamente a
          cualquier columna
        </li>
        <li>• Haz hover sobre una tarea y haz clic en × para eliminarla</li>
      </ul>
    </div>
  );
};
