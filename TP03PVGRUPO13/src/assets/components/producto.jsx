import React, { useState } from "react";

export default function ProductoInteractivo() {
  const [productos, setProductos] = useState([
    { descripcion: "Mouse", precio: 25.99 },
    { descripcion: "Teclado", precio: 19.99 },
    { descripcion: "Monitor", precio: 150.5 },
    { descripcion: "USB", precio: 10.0 },
    { descripcion: "Auriculares", precio: 35.75 }
  ]);
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");

  const logProductos = (arr, mensaje) => {
    console.log(`\n${mensaje}`);
    arr.forEach((p, i) =>
      console.log(`${i + 1} - ${p.descripcion} $${p.precio.toFixed(2)}`)
    );
  };

  const handleAgregar = () => {
    const precioNum = parseFloat(precio);
    if (!descripcion.trim() || isNaN(precioNum) || precioNum <= 0) return;
    const nuevo = { descripcion: descripcion.trim(), precio: precioNum };
    const arr = [...productos, nuevo];
    setProductos(arr);
    logProductos(arr, "Productos tras agregar:");
    setDescripcion("");
    setPrecio("");
  };

  const handleFiltrar = () => {
    const arr = productos.filter((p) => p.precio > 20);
    setProductos(arr);
    logProductos(arr, "Productos filtrados (> $20):");
  };

  const handleIva = () => {
    const arr = productos.map((p) => ({
      ...p,
      precio: parseFloat((p.precio * 1.21).toFixed(2)),
    }));
    setProductos(arr);
    logProductos(arr, "Productos con IVA 21%:");
  };

  const handleOrdenar = () => {
    const arr = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(arr);
    logProductos(arr, "Productos ordenados ascendente:");
  };

  const handleEliminarMasBarato = () => {
    if (!productos.length) return;
    const menor = Math.min(...productos.map((p) => p.precio));
    const arr = productos.filter((p) => p.precio !== menor);
    setProductos(arr);
    logProductos(arr, "Tras eliminar el más barato:");
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Gestión de Productos con array</h1>

      <div style={{ marginBottom: 15 }}>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button onClick={handleAgregar}>Agregar producto</button>
      </div>

      <div style={{ marginBottom: 15 }}>
        <button onClick={handleFiltrar} style={{ marginRight: 8 }}>
          Filtrar &gt; $20
        </button>
        <button onClick={handleIva} style={{ marginRight: 8 }}>
          Aplicar IVA 21%
        </button>
        <button onClick={handleOrdenar} style={{ marginRight: 8 }}>
          Ordenar ascendente
        </button>
        <button onClick={handleEliminarMasBarato}>
          Eliminar más barato
        </button>
      </div>

      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul>
          {productos.map((p, i) => (
            <li key={i}>
              {i + 1} - {p.descripcion} ${p.precio.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}