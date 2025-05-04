import { useState } from 'react';
import EntradaTarea from './assets/Components/entradatareas';
import ListaTareas from './assets/Components/listatareas';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto, fechaInicio) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      fechaInicio,
      completada: false
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const marcarComoRealizada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="contenedor">
      <h1>Agregar Nueva Tarea</h1>
      <EntradaTarea alAgregar={agregarTarea} />
      <h2>Lista de Tareas:</h2>
      <ListaTareas
        tareas={tareas}
        alRealizar={marcarComoRealizada}
        alEliminar={eliminarTarea}
      />
    </div>
  );
}

export default App;

