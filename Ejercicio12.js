/*
  Ejercicio 12 — Aplicar descuento del 10% a los productos
  Autor: Aleyda Quispe
*/
let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?"));
let productos = [];

if (isNaN(cantidad) || cantidad <= 0) {
  alert("Cantidad inválida.");
} else {
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del producto " + (i + 1) + ":");
    let precio = parseFloat(prompt("Precio de " + nombre + ":"));
    if (!isNaN(precio) && precio > 0)
      productos.push({ nombre: nombre, precio: precio });
  }

  let productosDescuento = productos.map(prod => ({
    nombre: prod.nombre,
    precio: (prod.precio * 0.9).toFixed(2)
  }));
  let salida = "Precios con 10% de descuento:\n";
  productosDescuento.forEach(p => {
    salida += `${p.nombre}: S/ ${p.precio}\n`;
  });
  alert(salida);
  console.log("Productos con descuento:", productosDescuento);
}