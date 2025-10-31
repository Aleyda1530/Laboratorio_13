/*
  Ejercicio 7 — Verificar si un arreglo tiene duplicados usando Set
  Autor: Aleyda Quispe
*/
function tieneDuplicados(arr) {
  let conjunto = new Set(arr);
  return conjunto.size !== arr.length;
}

let cantidad = parseInt(prompt("¿Cuántos elementos tendrá el arreglo?"));
let elementos = [];

if (isNaN(cantidad) || cantidad <= 0) 
  alert("Cantidad inválida.");
else {
  for (let i = 0; i < cantidad; i++) {
    let valor = prompt("Ingrese el elemento " + (i + 1) + ":");
    elementos.push(valor);
  }
  let resultado = tieneDuplicados(elementos);
  alert(
    "Arreglo: [" + elementos.join(", ") + "]\n" + "¿Tiene duplicados?: " + (resultado ? "Sí" : "No")
  );
  console.log("Arreglo:", elementos, "Duplicados:", resultado);
}
