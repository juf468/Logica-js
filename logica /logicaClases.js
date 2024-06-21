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

const AgregarMetodoPrototype=(constructor)=> {
    constructor.prototype.saludar = function(){
        return 'Hello Word'
    }
}