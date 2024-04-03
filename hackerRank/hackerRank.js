

//Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivo, negativo, y cero. Imprima el valor decimal de cada fracción en una nueva línea con lugares después del decimal.

//Nota: Este desafío introduce problemas de precisión. Los casos de prueba se escalan a seis decimales, aunque respuestas con error absoluto de hasta son aceptables.

//Ejemplo

// hay elementos, dos positivos, dos negativos y uno cero. Sus proporciones son , y . Los resultados se imprimen como:

// 0.400000
// 0.400000
// 0.200000
// Función Descripción

// Completa el plusMinus función en el editor a continuación.

// plusMinus tiene el siguiente parámetro ( s ):

// int arr [ n ]: una matriz de enteros


function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    const total = arr.length;
    
    arr.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    });
    
    const positiveRatio = positiveCount / total;
    const negativeRatio = negativeCount / total;
    const zeroRatio = zeroCount / total;
    
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}