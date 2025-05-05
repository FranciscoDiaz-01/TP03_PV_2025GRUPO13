import React, { useState } from 'react';

function entradatareas({ alAgregar }) {
  const [texto, setTexto] = useState('');
  const [fecha, setFecha] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() && fecha) {
      alAgregar(texto.trim(), fecha);
      setTexto('');
      setFecha('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      <div>
        <label>Fecha de Inicio:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default entradatareas;

