// <!-- 
// Dado cinco enteros positivos, encuentra los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprime los valores mínimos y máximos respectivos en una sola línea como dos enteros largos separados por un espacio.

// Ejemplo:

// La suma mínima es 10 y la suma máxima es 14. La función imprime:

// 10 14

// Descripción de la función:

// Completa la función miniMaxSum en el editor a continuación.

// miniMaxSum tiene el siguiente(s) parámetro(s):

// arr: un array de enteros
// Imprimir:

// Imprime dos enteros separados por un espacio en una línea: la suma mínima y la suma máxima de 4 de los 5 elementos.

// Formato de entrada:

// Una sola línea de cinco enteros separados por espacios.

// Restricciones:

// Formato de salida:

// Imprime dos enteros largos separados por un espacio que denoten los valores mínimo y máximo respectivos que se pueden calcular sumando exactamente cuatro de los cinco enteros. (La salida puede ser mayor que un entero de 32 bits).

// Ejemplo de entrada:

// 1 2 3 4 5

// Ejemplo de salida:

// 10 14

// Explicación:

// Los números son 1, 2, 3, 4 y 5. Calcula las siguientes sumas usando cuatro de los cinco enteros:

// Suma todo excepto 1, la suma es 14.

// Suma todo excepto 2, la suma es 13.

// Suma todo excepto 3, la suma es 12.

// Suma todo excepto 4, la suma es 11.

// Suma todo excepto 5, la suma es 10. -->

function miniMaxSum(arr) {
    let minSum = Infinity;
    let maxSum = -Infinity;
    let totalSum = 0;

   
    for (let i = 0; i < arr.length; i++) {
        totalSum = totalSum + arr[i];
        minSum = Math.min(minSum, arr[i]);
        maxSum = Math.max(maxSum, arr[i]);
    }

    
    console.log(totalSum - maxSum, totalSum - minSum);
}