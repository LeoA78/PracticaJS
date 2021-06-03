import Persona from "./persona.js";
export default class Profesional extends Persona{

    constructor(nombre,apellido,edad,correo,ocupacion,salario,telefono){
        super(nombre,apellido,edad,correo);
        this.ocupacion = ocupacion;
        this.salario = salario;
        this.telefono = telefono;
    }

    mostrar(){
        super.mostrar();
        console.log(`Ocupación: ${this.ocupacion} Salario: ${this.salario} Telefono: ${this.telefono}`);
    }
}