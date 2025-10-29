// Ejercicio 3 - doblarNumeros(arreglo)
// Aleyda Quispe

function doblarNumeros(arreglo) {
    var nuevoArreglo = [];

    for (var i = 0; i < arreglo.length; i++) {
        var doble = arreglo[i] * 2;
        nuevoArreglo.push(doble);
    }
    return nuevoArreglo;
}

var cantidad = parseInt(prompt("¿Cuántos números desea ingresar en el arreglo?"));
var numeros = [];

if (isNaN(cantidad) || cantidad <= 0)
    alert("Ingrese una cantidad válida.");
else {
    for (var i = 0; i < cantidad; i++) {
        var valor = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
        if (isNaN(valor)) {
            alert("Valor no válido, se tomará como 0.");
            valor = 0;
        }
        numeros.push(valor);
    }
    var resultado = doblarNumeros(numeros);
    alert("Arreglo original: " + numeros.join(", ") +
          "\nArreglo con números duplicados: " + resultado.join(", "));
}