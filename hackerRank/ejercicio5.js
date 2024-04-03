// Aquí está la traducción al español del enunciado y la explicación del problema:

// Dada una matriz cuadrada, calcular la diferencia absoluta entre las sumas de sus diagonales.

// Por ejemplo, la matriz cuadrada se muestra a continuación:

// 1 2 3
// 4 5 6
// 9 8 9

// La diagonal de izquierda a derecha = . La diagonal de derecha a izquierda = . Su diferencia absoluta es .

// Descripción de la función

// Completa la función en el editor a continuación.

// diagonalDifference toma el siguiente parámetro:

// int arr[n][m]: una matriz de enteros
// Devuelve

// int: la diferencia diagonal absoluta
// Formato de entrada

// La primera línea contiene un solo entero, , el número de filas y columnas en la matriz cuadrada .
// Cada una de las siguientes líneas describe una fila, , y consta de enteros separados por espacios .

// Restricciones

// Formato de salida

// Devuelve la diferencia absoluta entre las sumas de las dos diagonales de la matriz como un solo entero.

// Entrada de ejemplo

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Salida de ejemplo

// 15
// Explicación

// La diagonal primaria es:

// 11
// 5
// -12
// Suma a lo largo de la diagonal primaria: 11 + 5 - 12 = 4

// La diagonal secundaria es:

// 4
// 5
// 10
// Suma a lo largo de la diagonal secundaria: 4 + 5 + 10 = 19
// Diferencia: |4 - 19| = 15

// Nota: |x| es el valor absoluto de x
function diagonalDifference(arr) {

    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;


    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n - 1 - i];
    }


    let absoluteDifference = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

    return absoluteDifference;
}
