export default class Persona{

    constructor(nombre,apellido,edad,correo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
    }

    mostrar(){
        console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Correo: ${this.correo}`);
    }

}