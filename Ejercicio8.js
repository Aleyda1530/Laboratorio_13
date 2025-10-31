/*
  Ejercicio 8 — Combinar dos arreglos y eliminar duplicados
  Autor: Aleyda Quispe
*/

function unirSinDuplicados(arr1, arr2) {
  let combinado = [...arr1, ...arr2];
  let conjunto = new Set(combinado);
  return Array.from(conjunto);
}
let n1 = parseInt(prompt("¿Cuántos elementos tendrá el primer arreglo?"));
let arr1 = [];
for (let i = 0; i < n1; i++) {
  arr1.push(prompt("Elemento " + (i + 1) + " del arreglo 1:"));
}
let n2 = parseInt(prompt("¿Cuántos elementos tendrá el segundo arreglo?"));
let arr2 = [];
for (let i = 0; i < n2; i++) {
  arr2.push(prompt("Elemento " + (i + 1) + " del arreglo 2:"));
}
let resultado = unirSinDuplicados(arr1, arr2);

alert( "Arreglo 1: [" + arr1.join(", ") + "]\n" + "Arreglo 2: [" + arr2.join(", ") + "]\n" +
  "Unión sin duplicados: [" + resultado.join(", ") + "]"
);
console.log("Resultado:", resultado);
