function Producto() {
  // Array de productos
  const productos = [
    { id: 1, nombre: "Notebook Lenovo", precio: 180000 },
    { id: 2, nombre: "Mouse Logitech", precio: 9000 },
    { id: 3, nombre: "Teclado Redragon", precio: 22000 },
    { id: 4, nombre: "Monitor Samsung", precio: 195000 },
    { id: 5, nombre: "Auriculares JBL", precio: 18000 },
    { id: 6, nombre: "Impresora HP", precio: 55000 }
  ];

  // Filtro los productos con precio > 20000
  const productosFiltrados = productos.filter(producto => producto.precio > 20000);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Productos con precio mayor a $20.000</h2>
      <ul>
        {productosFiltrados.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Producto;