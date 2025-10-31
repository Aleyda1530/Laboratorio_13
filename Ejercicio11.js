/*
  Ejercicio 11 — Filtrar estudiantes aprobados
  Autor: Aleyda Quispe
*/

let cantidad = parseInt(prompt("¿Cuántos estudiantes desea registrar?"));
let estudiantes = [];
if (isNaN(cantidad) || cantidad <= 0) {
  alert("Cantidad inválida.");
} else {
  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del estudiante " + (i + 1) + ":");
    let nota = parseFloat(prompt("Nota de " + nombre + ":"));
    if (!isNaN(nota)) 
      estudiantes.push({ nombre: nombre, nota: nota });
  }
  let aprobados = estudiantes.filter(est => est.nota >= 11);

  let resultado = "Estudiantes aprobados:\n";
  aprobados.forEach(est => {
    resultado += `${est.nombre} - Nota: ${est.nota}\n`;
  });

  if (aprobados.length === 0)
    resultado = "Ningún estudiante aprobó.";
  alert(resultado);
  console.log("Aprobados:", aprobados);
}
