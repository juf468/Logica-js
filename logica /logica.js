//LOGICA SIMPLE (METODOS/ARRAY)
//RETORNAR PRIMER ELEMENTO DE UN ARRAY
const devolverPrimerElemento = (array) => {
	return array[0];
};
//RETORNAR ULTIMO ELEMENTO DEL ARRAY
const devolverUltimoElemento = (array) => {
	return array[array.length - 1]; //recorre el array yu toma el ultimo elemento
};
//RETORNAR EL LARGO DEL ARRAY
const devolverLargoDelArray = (array) => {
	return array.lenght;
};

//ARRAY DE NUMEROS ENTEROS. DEBES AUMENTAR CADA ENTERO X1 Y RETORNARLO
const incrementarPorUno = (array) => {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(array[i] + 1); //en cada vuelta se agrega a 'result' el numero del indice sumandole 1
	}
	return result;
};

//AÑADE EL 'ELEMENTO' AL FINAL DEL ARRAY Y RETORNALO
const agregaElemntoAlFinal = (elemento, array) => {
	array.push(elemento);
	return array;
};

// AÑADE EL ELEMNTO AL COMIENZO DEL ARRAY
const agregarElementoAlComienzo = (elemnto, array) => {
	array.unshift(elemnto);
	return array;
};

// 'PALABRAS' ES UN ARRAY DE STRINGS, RETORNA UN ESTRING CON LAS PALABRAS CONCATENADAS CON ESPACIOS ENTRE LAS PALABRAS
const dePalabrasAFrase = (palabras) => {
	let frase = '';
	for (let i = 0; i < palabras.length; i++) {
		if (i === 0) {
			// si i es igual a la primer posicion del array, result toma esta primer palabra
			frase = frase + palabras[i];
			continue;
		}
		frase = frase + ' ' + palabras[i];
	}
	return frase;
};
//MISMO MEJORADO:
const dePalabrasAFraseMejorado = (palabras) => {
	let frase = '';
	for (let i = 0; i < palabras.length; i++) {
		frase += (i === 0 ? '' : ' ') + palabras[i];
	}
	return frase;
};

//COMPRUEBA SI EL ELEMENTO EXISTE DENTRO DEL ARRAY DEVUELVE TRUE SI LO ESTA O FALSE SI NO LO ESTA
//CON .FIND()
const arrayContieneElemento = (array, elemento) => {
	const found = array.find((item) => item === elemento);
	if (found) {
		return true;
	}
	return false;
};

//MEJORADO
const arrayContieneElementoM = (array, elemento) => {
	const found = array.find((item) => item === elemento);
	return !!found; // Se convierte a booleano
};
// CON INCLUDES():

const arrayContieneElementoConIncludes = (array, elemento) => {
	return array.includes(elemento); //Este metodo retorna true o false impĺisitamente
};

// 'NUMEROS' **DEBE** SER UN ARRAY DE NUMEROS ENTEROS, SUMA TODOS LOS ENMTEROS Y RETORNA EL VALOR
const sumarTodosLosNumeros = (numeros) => {
	let result = 0;
	let filtrados = numeros.filter((numero) => Number.isInteger(numero)); // Me aseguro que solo haya numeros enteros
	for (let i = 0; i < filtrados.length; i++) {
		result = result + filtrados[i];
	}
	return result;
};

//otra solución:
const sumarTodosLosNumeros2 = (numeros) => {
	return numeros.reduce((total, numero) => {
		if (Number.isInteger(numero)) {
			return total + numero;
		} else {
			return total; // Si el número no es entero, no afecta la suma
		}
	}, 0);
};

// 'RESULTADOTEST' ES UN ARRAY DE ENTEROS, CALCULA Y DEVUELVE EL PROMEDIO DE PUNTAJES A TRAVES DE UN BUCLE FOR
const promedioResultadoTest = (resultadoTest) => {
	let suma = 0;

	for (let i = 0; i < resultadoTest.length; i++) {
		suma += resultadoTest[i];
	}

	return suma / resultadoTest.length;
};

//RETORNA EL NUMERO MAS GRANDE DENTRO DEL ARRAY
const numeroMasGrande = (numeros) => {
	if (numeros.length === 0) {
		return undefined;
	}
	let maxNumber = 0;
	for (let i = 0; i < numeros.length; i++) {
		if (maxNumber < numeros[i]) {
			maxNumber = numeros[i];
		}
	}
	return maxNumber;
};
//MEJORADO
const numeroMasGrande2 = (numeros) => {
	if (numeros.length === 0) {
		return undefined;
	}

	return Math.max(...numeros);
};
