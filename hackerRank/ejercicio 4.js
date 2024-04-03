// Dada una matriz de enteros, donde todos los elementos excepto uno ocurren dos veces, encuentra el elemento único.

// Ejemplo

// El elemento único es .

// Descripción de la función

// Completa la función lonelyinteger en el editor a continuación.

// lonelyinteger tiene el siguiente(s) parámetro(s):

// int a[n]: una matriz de enteros
// Devuelve

// int: el elemento que ocurre solo una vez
// Formato de entrada

// La primera línea contiene un solo entero, , el número de enteros en la matriz.
// La segunda línea contiene enteros separados por espacios que describen los valores en .

// Restricciones

// Se garantiza que  es un número impar y que hay un único elemento.
function lonelyinteger(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
       
        result ^= a[i];
    }
    return result;
}

// El ^ llamado xor me  devuelve 1 si los bits en los operandos son diferentes, y 0 si son iguales.
// Como todos los elementos excepto uno aparecen dos veces, al aplicar el operador XOR a todos los elementos, los pares se cancelan y solo queda el elemento único.

function lonelyinteger(a) {

    const uniqueElements = a.filter((element, index) => a.indexOf(element) === a.lastIndexOf(element));
    
    return uniqueElements[0];
}
