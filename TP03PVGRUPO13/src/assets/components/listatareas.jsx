import React from 'react';
import Tarea from './tareas';

function listatareas({ tareas, alRealizar, alEliminar }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          alRealizar={alRealizar}
          alEliminar={alEliminar}
        />
      ))}
    </ul>
  );
}

export default listatareas;