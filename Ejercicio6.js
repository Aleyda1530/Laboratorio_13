// Ejercicio 6 - Crear un Set con nombres y eliminar los repetidos automáticamente
// Aleyda Quispe

var cantidad = parseInt(prompt("¿Cuántos nombres desea ingresar?"));
var nombres = [];

if (isNaN(cantidad) || cantidad <= 0)
    alert("Ingrese una cantidad válida.");
else {
    for (var i = 0; i < cantidad; i++) {
        var nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
        if (nombre === null || nombre.trim() === "") {
            alert("Nombre no válido, se omitirá.");
        } else {
            nombres.push(nombre.trim());
        }
    }

    var conjuntoNombres = new Set(nombres);
    var nombresUnicos = Array.from(conjuntoNombres);

    alert("Nombres ingresados: " + nombres.join(", ") +
          "\nNombres sin repetidos: " + nombresUnicos.join(", "));
}