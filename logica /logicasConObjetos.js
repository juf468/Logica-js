//CREA UN NUEVO OBJETO CON LA PROPIEDAD 'NOMBRE' Y EL VALOR 'NOMBRE'.
// AGREGA UNA PROOPIEDAD AL OBJETO LLAMADA 'EDAD' Y CON EL VALOR 'EDAD'.
//AGREGFA EL METODO 'MEOW' QUE DEVUELVA EL STRING 'MEOW!'.

const Gato = {
	Nombre: 'NOMBRE',
	Edad: 'EDAD',
	Meow: function () {
		return 'Meow!';
	},
};
console.log(Gato.Nombre); // 'NOMBRE'
console.log(Gato.Edad); // 'EDAD'
console.log(Gato.Meow()); // 'Meow!'

//AGREGA UNA PROPIEDAD AL OBJETO (ARGUMENTO 'OBJETO') CON EL VALOR 'NULL' Y RETORNALO

const agregaPropiedad = (objeto, propiedad) => {
	objeto[propiedad] = null;
	return objeto;
};
// 'METODO' ES UNA CADENA QUE CONTIENE EL NOMBRE DE UN METODO EN EL OBJETO.
// INVOCA ESE METODO.
const invocarMetodo = (objeto, metodo) => {
	objeto[metodo](); //simplemente con el '()' ya estoy invocando al metodo
};

//! MISMO CASO MEJORADO, CONTEMPLA SI EL METODO NO EXISTE.
const invocarMetodo2 = (objeto, metodo) => {
	if (objeto[metodo]) {
		return objeto[metodo]();
	}
	return console.error(`El método '${metodo}' no existe en el objeto.`);
};
//'OBJETO MISTERIOSO' TIENE UNA PROPIEDAD 'NUMERO MISTERIOSO'
//MULTIPLICA EL NUMERO MIOSTERIOSO X5 Y DEVUELVE EL PRODUCTO.

const multiplicaElNumeroMisterioso = (objetoMisterioso) => {
	const misterio = objetoMisterioso.numeroMisterioso * 5;
	return misterio;
};

//ELIMINA LA PROPIEDAD DE OBJETO CUYO NOMBRE ESTA PASANDO POR EL PARAMENTRO 'UNAPROPIEDAD'
// DEVOLVE EL OBJETO
const eliminarPropiedad = (objeto, unaPropiedad) => {
	delete objeto[unaPropiedad];
	return objeto
}
