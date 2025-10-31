/*
  Ejercicio 10 — Catálogo de productos con Map
  Autor: Aleyda Quispe
*/
let productos = new Map();
let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?"));
if (isNaN(cantidad) || cantidad <= 0)
  alert("Cantidad inválida.");
else {
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del producto " + (i + 1) + ":");
    let precio = parseFloat(prompt("Precio de " + nombre + ":"));
    if (!isNaN(precio) && nombre.trim() !== "") {
      productos.set(nombre.toLowerCase(), precio);
    }
  }

  let consulta;
  do {
    consulta = prompt("Ingrese el nombre del producto para consultar su precio (o 'salir' para terminar):").toLowerCase();

    if (consulta !== "salir") {
      if (productos.has(consulta)) 
        alert("El precio de " + consulta + " es S/ " + productos.get(consulta).toFixed(2));
      else {
        alert("Producto no encontrado.");
      }
    }
  } while (consulta !== "salir");
  console.log("Catálogo final:", productos);
}