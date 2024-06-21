//CREA UNA CLASE ES6 LLAMADA 'USUSARIO'
//DEBE ACEPTAR UN OBJ 'OPCIONES' CON LAS PROPIEDADES 'USUSARIO', 'NOMBRE', 
// 'EMAIL, Y 'PASSWORD'.
// EN EL CONSTRUCTOR DEBE TEENER UN METODO LLAMADO 'SALUDAR' Q DEVUELVA EL 
//STRING 'HOLA MI NOMBRE ES +{(NOMBRE)}

class Usuario {
    constructor(opciones) {
        this.usuario = opciones.usuario;
        this.nombre = opciones.nombre;
        this.email = opciones.email;
        this.password = opciones.password;
    }
    
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}

//AGREGA UN METODO AL CONSTRUCTOR DEL PROTOTYPE 
//EL METODO DEBE LLAMARSE 'SALUDAR' Y RETORNA 'HELLO WORD'

const AgregarMetodoPrototype = (constructor)=> {
    constructor.prototype.saludar = function(){
        return 'Hello Word'
    }
}
//AGREGA UN METODO PROTOTYPE DE STRINGQUE DEVUELVA LA MISMA CADENA DE CARACTERES PERO INVERTIDA
//EL METODO DEBE LLAMARSE 'reverse'
const AgregatStringInvertida =( )=>{
    String.prototype.Reverse = function(){
        return this.split('').reverse().join('')
    }
}
//CREA EL CONSTRUCTOR DE LA CLASE 'PEPRSONA' 
//DEBE TENER COMO PROPIEDADES 'NOMBRE', 'APELLIDO', 'EDAD', 'DOMICILIO'
//DEBE TENER UN METODO LLAMADO 'DETALLE' QUE DEVUELVE UN OBJ CON LAS PROPS Y SUS VALORES

class Persona {
    constructor(nombre, apellido, edad, domicilio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
    }
    detalle(){
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio,
        }
    }
}
//AGREGA UN METODO 'DATOS' A LA CLASE PERSONA QUE TOMA EL NOMBRE Y LA EDAD Y LO DEVUELVE EN STRING
//EJEMPLO ; 'JUAN, 22 AÑOS'

const AgregarMetodo = () => {
    return `${this.nombre}, ${this.edad} años`;
};

