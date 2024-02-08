//UTILIZA LA PALABRA CLAVE 'ARGUMENTS' PARA MULTIPLICAR LOS ARGUMENTOS Y DEVOLVER EL PRODUCTO.
//SI NO SE PASN ARGUMENTOS A LA FUNCION RETORNA 0, SI PASAN 1 ARGUMENTO SIMPLEMENTE RETORNALO.
const multiplicarArgumentos = () => {
	let argumentos = [...arguments];
	let multiplicacion = 1; //asi devuelve el argumento pasado por props

	if (argumentos.length === 0) {
		return 0;
	}
	if (argumentos.length === 1) {
		return argumentos[0];
	}
	for (let i = 0; i < argumentos.length; i++) {
		multiplicacion = multiplicacion * argumentos[i];
	}
	return multiplicacion;
};
//MISMO MEJORADO
const multiplicarArgumentos2 = (...argumentos) =>
	argumentos.length === 0
		? 0
		: argumentos.length === 1
		? argumentos[0]
		: argumentos.reduce((producto, valor) => producto * valor, 1);

//debe retornar LA CANTIDAD de elementos mayores a 18

const cuentoElementos = (array) => {
	let elementos = array.filter((numero) => numero > 18);
	return elementos.length;
};

//VERSION SIN FILTER ( MAS LARGO :/ )

const cuentoElementos2 = (array) => {
	let contador = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 18) {
			contador = contador + 1;
		}
	}
	return contador;
};

//SUPONGA QUE LOS DIAS DE LA SEMANA SE CODIFICAN COMO 1= DOM 2= LUN 3=MAR 4=MIER 5=JUE 6=VIE 7=SAB
//CON ESTA INFO RETORNA  'ES FIN DE SEMANA ' SI CORRESPONDE A SABADO O DOMINGO
//DE LO CONTRARIO RETORNA 'ES DIA LABORAL'

const diaDeLaSemana = (numeroDeDia) => {
	if (numeroDeDia === 1 || numeroDeDia === 7) {
		return 'Es fin de semana';
	}
	return 'Es dia Laboral';
};

//SIMPLIFICADO AL TERNARIO
const diaDeLaSemana2 = (numeroDeDia) => {
	return numeroDeDia === 1 || numeroDeDia === 7
		? 'Es fin de semana'
		: 'Es día laboral';
};

//LA FUNCION RECIBE COMO PARAMETRO UN NUMERO ENTERO
//RETORNE TRUE SI EL NUMERO INICIA CON 9
// DE LO CONTRARIO RETORNE FALSE

const empiezaCon9 = (numero) => {
	const primerNumero = Number(String(numero)[0]); // creo una const que contiene el numero convertido en string, indicando con [0] la primer posicion ej => 19 => '1' '9' => '1'
	if (primerNumero === 9) {
		return true;
	}
	return false;
};
// SIMPLIFICADO
const empiezaCon9Simplificado = (numero) => Number(String(numero)[0]) === 9; //contiene el booleano implicito

//SI TODOS LOS ELEMENTOS DEL ARRAY SON IGUALES RETORNA TRUE, DE LO CONTRARIO FALSE
const todosIguales = (array) => {
	let contador = 0;
	let primerElemento = array[0];

	for (let i = 0; i < array.length; i++) {
		if (primerElemento === array[i]) {
			contador = contador + 1; // si son iguales se le suma 1 a contador
		}
	}

	if (contador === array.length) {
		// si contador es igual al largo del array es porque son todos iguales
		return true;
	}

	return false;
};
//SIMPLIFICADO
//every => verifica si todos los elementos del array cumplen con cierta condición. Retorna un valor booleano:

const todosIguales2 = (array) => {
	return array.every((elemento) => elemento === array[0]);
};
//EL ARRAY CONTIENE ALGUNOS MESES DEL AÑO
//BUSCA EN EL LOS MESES 'ENERO', 'MARZO', 'NOVIEMBRE' Y GUARDALOS EN UN NUEVO ARRAY PARA LUEGO RETORNARLO
//SI NO SE ENCUENTRA ALGUNO/OS DE LOS MESES PEDIDOS RETORNA ' NO SE ENCONTRARON LOS MESES PEDIDOS'

const mesesDelAño = (array) => {
	let meses = array.filter(
		(mes) => mes === 'enero' || mes === 'marzo' || mes === 'noviembre'
	);

	if (
		meses.includes('enero') &&
		meses.includes('marzo') &&
		meses.includes('noviembre')
	) {
		return meses;
	}

	return 'No se encontraron los meses pedidos';
};
//LA FUNCION CONTIENE UN ARRAY CON NUMEROS DEL 0 AL 200, RECORRE EL ARRAY Y GUARDA EN UN NUEVO ARRAY LOS NUMEROS MAYORES A 100 (NO INCLUYE 100)
//RETORNA EL NUEVO ARRAY
const mayorA100 = (array) => {
	let mayoresA100 = array.filter((number) => number >= 101);
	return mayoresA100;
};

//ITERA UN BUCLE AUMENTANDO X2 HASTA 10 VECES.
//GUARDA CADA NUEVO VALOR EN  UN ARRAY NUEVA.
//RETORNA EL ARRAY.
//SI EN ALGUN MOMENTO EL NUMERO DE LA SUMA COINCIDE CON LA CANTIDAD DE ITERACIONES DEBES INTERRUMPIR LA EJECUCION Y RETORNAR 'SE ROMPIO LA EJECUCION'.

const breackStatement = (numero) => {
	let array = [];
	let interrumped = false;
	for (let i = 1; i <= 10; i++) {
		if (array.length === 0) {
			array.push(numero * 2); //Esto garantiza que el primer valor en el array sea numero * 2.
		}
		if (array[array.length - 1] === i) {
			interrumped = true; //Se verifica si el último elemento del array es igual al contador i.
			break;
		}
		array.push(array[array.length - 1] * 2); // Si no se cumplen las condiciones anteriores, se agrega al array el doble del último elemento del array.
	}
	if (interrumped) {
		return 'Se rompio la ejecucion';
	}
	return array;
};
