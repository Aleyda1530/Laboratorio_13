/*
  Ejercicio 7 — Calcular el promedio de los números de un arreglo
  Autor: Aleyda Quispe
*/
let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));
let numeros = [];

if (isNaN(cantidad) || cantidad <= 0)
  alert("Cantidad inválida.");
else {
  for (let i = 0; i < cantidad; i++) {
    let valor = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    if (isNaN(valor)) valor = 0;
    numeros.push(valor);
  }
  let suma = numeros.reduce((acum, num) => acum + num, 0);
  let promedio = suma / numeros.length;
  
  alert("Números ingresados: " + numeros.join(", ") + "\nPromedio: " + promedio.toFixed(2));
  console.log("Promedio:", promedio);
}