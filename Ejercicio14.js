/*
  Ejercicio 14 — Filtrar productos por categoría, aplicar descuento y calcular total
  Autor: Aleyda Quispe
*/

let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?"));
let productos = [];

if (isNaN(cantidad) || cantidad <= 0)
  alert("Cantidad inválida.");
else {
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del producto " + (i + 1) + ":");
    let precio = parseFloat(prompt("Precio de " + nombre + ":"));
    let categoria = prompt("Categoría del producto:");
    if (!isNaN(precio) && precio > 0)
      productos.push({ nombre, precio, categoria });
  }

  let categoriaFiltro = prompt("Ingrese la categoría que desea filtrar:");
  let filtrados = productos.filter(p => p.categoria.toLowerCase() === categoriaFiltro.toLowerCase());

  if (filtrados.length === 0)
    alert("No hay productos en esa categoría.");
  else {
    let productosDescuento = filtrados.map(p => ({
      nombre: p.nombre,
      categoria: p.categoria,
      precio: (p.precio * 0.9).toFixed(2) 
    }));

    let total = productosDescuento.reduce((suma, p) => suma + parseFloat(p.precio), 0);

    let salida = "Productos filtrados (con 10% de descuento):\n";
    productosDescuento.forEach(p => {
      salida += `${p.nombre} (${p.categoria}): S/ ${p.precio}\n`;
    });
    salida += "\nTotal a pagar: S/ " + total.toFixed(2);

    alert(salida);
    console.log("Filtrados:", productosDescuento, "Total:", total);
  }
}