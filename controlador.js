export default class Controlador{

    static dibujar(profesional){
        let nombreDiv = document.getElementById("nombreDiv");
        let ocupacionDiv = document.getElementById("ocupacionDiv");
        let datos = document.getElementById("datos");

        nombreDiv.innerText =  `Nombre: ${profesional.nombre} Apellido: ${profesional.apellido}`;
        ocupacionDiv.innerText = `Ocupación: ${profesional.ocupacion}`;
        datos.innerHTML = `Correo: ${profesional.correo}<br> Edad: ${profesional.edad}<br> Salario: ${profesional.salario}<br> Telefono: ${profesional.telefono}`;
    }

}