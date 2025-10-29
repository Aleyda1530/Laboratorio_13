// Ejercicio 5 - reordenarPalabras(oracion)
// Aleyda Quispe

function reordenarPalabras(oracion) {
    var palabras = oracion.split(" ");

    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].toUpperCase();
    }
    palabras.sort();
    return palabras;
}

var texto = prompt("Ingrese una oración con palabras separadas por espacios:");

if (texto === null)
    alert("Debe ingresar una oración válida.");
else {
    var resultado = reordenarPalabras(texto);
    alert("Palabras en orden alfabético y en mayúsculas:\n" + resultado.join(", "));
}