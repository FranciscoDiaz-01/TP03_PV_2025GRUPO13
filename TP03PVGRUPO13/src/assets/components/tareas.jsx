import React from 'react';

function tareas({ tarea, alRealizar, alEliminar }) {
  return (
    <li>
      <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
        {tarea.texto} - {tarea.fechaInicio}
      </span>
      <button onClick={() => alRealizar(tarea.id)}>Realizada</button>
      <button onClick={() => alEliminar(tarea.id)}>Eliminar</button>
    </li>
  );
}

export default tareas;