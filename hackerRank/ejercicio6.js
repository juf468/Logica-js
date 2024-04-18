// Ordenamiento por comparación
// Quicksort suele tener un tiempo de ejecución de , pero ¿existe un algoritmo que pueda ordenar aún más rápido? En general, esto no es posible. La mayoría de los algoritmos de ordenación son ordenamientos por comparación, es decir, ordenan una lista simplemente comparando los elementos entre sí. Un algoritmo de ordenación por comparación no puede superar un tiempo de ejecución de (peor caso), ya que representa el número mínimo de comparaciones necesarias para saber dónde colocar cada elemento. Para más detalles, puedes ver estas notas (PDF).

// Ordenamiento alternativo
// Otro método de ordenación, el counting sort, no requiere comparación. En su lugar, se crea una matriz de enteros cuyo rango de índices cubre todo el rango de valores en la matriz a ordenar. Cada vez que un valor ocurre en la matriz original, se incrementa el contador en ese índice. Al final, se recorre la matriz de conteo, imprimiendo el valor de cada índice con valor distinto de cero esa cantidad de veces.

// Ejemplo

// Todos los valores están en el rango , así que se crea una matriz de ceros, . Los resultados de cada iteración son los siguientes:

// i arr[i] result
// 0 1 [0, 1, 0, 0]
// 1 1 [0, 2, 0, 0]
// 2 3 [0, 2, 0, 1]
// 3 2 [0, 2, 1, 1]
// 4 1 [0, 3, 1, 1]
// La matriz de frecuencia es . Estos valores también pueden utilizarse para crear la matriz ordenada: .

// Nota
// Para este ejercicio, siempre devuelve una matriz de frecuencia con 100 elementos. El ejemplo anterior muestra solo los primeros 4 elementos, el resto son ceros.

// Desafío
// Dada una lista de enteros, cuenta y devuelve el número de veces que aparece cada valor como una matriz de enteros.

// Descripción de la función

// Completa la función countingSort en el editor a continuación.

// countingSort tiene el siguiente parámetro(s):

// arr[n]: una matriz de enteros
// Devuelve

// int[100]: una matriz de frecuencia
// Formato de entrada

// La primera línea contiene un entero , el número de elementos en .
// Cada una de las siguientes líneas contiene un entero donde .

// Restricciones

// Ejemplo de entrada

// 100
// 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33
// Ejemplo de salida

// 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2
// Explicación

// Cada uno de los valores resultantes representa el número de veces que apareció en .
function countingSort(arr) {
 
    const frequencyArray = new Array(100).fill(0);


    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++;
    }

    
    return frequencyArray;
}