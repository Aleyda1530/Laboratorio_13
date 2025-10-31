/*
  Ejercicio 13 — Calcular el total de precios usando reduce()
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
    if (!isNaN(precio) && precio > 0) 
      productos.push({ nombre: nombre, precio: precio });
  }

  let total = productos.reduce((suma, prod) => suma + prod.precio, 0);
  alert(
    "Productos registrados:\n" +
    productos.map(p => `${p.nombre}: S/ ${p.precio}`).join("\n") +
    "\n\nTotal a pagar: S/ " + total.toFixed(2)
  );
  console.log("Total:", total, "Productos:", productos);
}