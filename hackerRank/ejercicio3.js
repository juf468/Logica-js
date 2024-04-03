

// Dado un tiempo en formato de reloj de 12 horas con AM/PM, conviértelo a formato militar (24 horas).

// Nota: - 12:00:00AM en un reloj de 12 horas es 00:00:00 en un reloj de 24 horas.

// 12:00:00PM en un reloj de 12 horas es 12:00:00 en un reloj de 24 horas.
// Ejemplo:

// Devolver '12:01:00'.

// Devolver '00:01:00'.

// Descripción de la función:

// Completa la función timeConversion en el editor de abajo. Debería devolver una nueva cadena que represente el tiempo de entrada en formato de 24 horas.

// timeConversion tiene el siguiente parámetro:

// string s: un tiempo en formato de reloj de 12 horas
// Devuelve:
// string: el tiempo en formato de reloj de 24 horas

// Formato de Entrada:

// Una sola cadena que representa un tiempo en formato de reloj de 12 horas (es decir, AM o PM).

// Restricciones:

// Todos los tiempos de entrada son válidos.



function timeConversion(s) {

    let timeArr = s.split(':');
    let hour = parseInt(timeArr[0]);
    let minute = timeArr[1];
    let second = timeArr[2].substring(0, 2); 
  
  
    if (s.includes('PM')) {
      
        if (hour != 12) {
            hour += 12;
        }
    } else {
        
        if (hour == 12) {
            hour = 0;
        }
    }

   
    let hourStr = hour.toString().padStart(2, '0'); 
    return `${hourStr}:${minute}:${second}`;
}