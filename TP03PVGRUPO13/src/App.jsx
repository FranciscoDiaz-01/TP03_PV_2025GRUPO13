import { useState } from 'react';
import EntradaTarea from './assets/components/entradatareas';
import Producto from './assets/components/producto';

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
    <div className="contenedor" style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Agregar Nueva Tarea</h1>
      <EntradaTarea alAgregar={agregarTarea} />

      <h2>Lista de Tareas:</h2>

      <hr style={{ margin: '40px 0' }} />

      <h1>Productos</h1>
      <Producto />
    </div>
  );
}

export default App;
