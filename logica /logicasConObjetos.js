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
//CREA UN NUEVO OBJETO CON LAS PROPIEDADES, COINCIDIENDO CON LOS ARGUMENTOS PASADOS EN LA FUNCION.
//DEVUELVE EL OBJETO
const nuevouUsuario = (nombre, emial, password) => {
	const Usuario = {
		nombre: nombre,
		emial: emial,
		password: password
	}
	return Usuario
}

//DEVUELVE TRUE SI EL OBJETO (OBJECT) TIENE LA PROPIEDAD (KEY) CUYO NOMBRE ES IGUAL AL ARGUMENTO PROPIEDAD
//PROPIEDAD ES UN STRING
//DE LO CONTRARIO DEVUELVE FALSE

const tienePropiedad = (objeto, propiedad) => {
	const keysArray = Object.keys(objeto);
//Object.keys() es un método estático de la clase Object en JavaScript. Este método 
//devuelve un array de las propiedades enumerables de un objeto dado,
//en el mismo orden en que se presenten al iterar sobre el objeto de manera normal
// ejemplo: const keysArray = Object.keys(persona);
//console.log(keysArray); // ["nombre", "edad", "ciudad"]

	if (keysArray.includes(propiedad)){
		return true
	}
	return false
}
//COMPRUEBA SI EL PASSWORD ENVIADO POR PARAMETRO COINCIDE CON LA PROPIEDAD 'PASSWORD' DEL OBJETO 'USUARIO'
// DEVUELVE 'TRUE' SI COINCIDE, DE LO CONTRARIO DELVUELVE 'FALSE'

const verificarPassword = (usuario, password) => {
	if (usuario.password === password) {
		return true
	}
	return false
}

//REEMPLAZA LA CONTRASEÑA EXISTENTE EN EL OBJETO 'USUARIO' CON EL VALOR 'NUEVA PASSWORD' 
//DEVUELVE EL OBJETO
 const actualizarPassword = (usuario, nuevaPassword) =>{
	usuario.password = nuevaPassword
	return usuario
 }
 //USUARIO TIENE UNA PROPIEDAD LLAMADA 'amigos' QUE ES UNA ARRAY
 //AGREGA 'NUEVO AMIGO' AL FINAL DEL ARRAY
 //DEVUELVE EL OBJETO
 const AgregarAmigo = (usuario, nuevoAmigo) => {
	usuario.amigos.push(nuevoAmigo);
	return usuario
 }