/*
  Ejercicio 9 — Contar cuántas veces aparece cada elemento en un arreglo
  Autor: Aleyda Quispe
*/
function contarFrecuencias(arr) {
  let frecuencias = {};
  for (let elemento of arr) {
    if (frecuencias[elemento])
      frecuencias[elemento]++;
    else
      frecuencias[elemento] = 1;
  }
  return frecuencias;
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
  let resultado = contarFrecuencias(elementos);

  let salida = "Frecuencias:\n";
  for (let clave in resultado) {
    salida += `${clave}: ${resultado[clave]}\n`;
  }
  alert(salida);
  console.log("Frecuencias:", resultado);
}