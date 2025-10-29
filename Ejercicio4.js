// Ejercicio 4 - filtrarYTransformar(arr)
// Aleyda Quispe

function filtrarYTransformar(arr) {
    var positivos = [];
    var suma = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            var cuadrado = arr[i] * arr[i];
            positivos.push(cuadrado);
            suma = suma + cuadrado;
        }
    }
    return {
        arreglo: positivos,
        total: suma
    };
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
    var resultado = filtrarYTransformar(numeros);
    alert("Arreglo original: " + numeros.join(", ") +
          "\nCuadrados de positivos: " + resultado.arreglo.join(", ") +
          "\nSuma total: " + resultado.total);
}