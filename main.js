import Persona from "./persona.js";
import Profesional from "./profesional.js";
import Controlador from "./controlador.js";


/* let persona = new Persona("Pepe","Heredia",45,"elpepe@gmail.com"); */

/* persona.mostrar(); */

/* let profesional = new Profesional("Lidia","Scarafia",32,"lidiaS@hotmail.com","Administrativa","180000","2974564564"); */

/* profesional.mostrar(); */


let boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let profesion = document.getElementById("profesion").value;
    let salario = document.getElementById("salario").value;
    let telefono = document.getElementById("telefono").value;

    let profesional = new Profesional(nombre,apellido,edad,correo,profesion,salario,telefono);
    Controlador.dibujar(profesional);

})


