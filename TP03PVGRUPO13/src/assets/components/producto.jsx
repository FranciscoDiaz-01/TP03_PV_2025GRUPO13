// 1. Array inicial
const productos = [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado",     precio: 30000 },
    { descripcion: "Monitor",     precio: 120000 },
    { descripcion: "Mouse",       precio: 18000 },
    { descripcion: "Webcam",      precio: 35000 }
  ];
  
  // 2. Mostrar con forEach
  console.log("1) Listado de productos:");
  productos.forEach(p => console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`));
  
  // 3. Filtra precios mayor a 20000
  const caros = productos.filter(p => p.precio > 20000);
  console.log("\n2) Productos con precio > $20.000:", caros);
  
  // 4. Map + IVA :'/
  const conIva = productos.map(p => ({
    descripcion: p.descripcion,
    precio: +(p.precio * 1.21).toFixed(2)
  }));
  console.log("\n3) Productos con IVA (21%):", conIva);
  
  // 5. Sort ascendente d:D
  productos.sort((a, b) => a.precio - b.precio);
  console.log("\n4) Productos ordenados por precio ascendente:", productos);
  
  // 6. Push nuevo producto 
  productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
  console.log("\n5) Array tras agregar nuevo producto:", productos);
  
  // 7. Eliminar el más barato :P
  const eliminado = productos.shift();
  console.log(`\n6) Se eliminó: ${eliminado.descripcion} ($${eliminado.precio})`);
  console.log("   Array resultante:", productos);  