//toUpperCase() para volver mayuscula todo 
var luis = {
    nombre: 'Luis',
    apellido: 'Banda',
    edad: 31
}

function imprimierrNombreMayuscula(persona){
    var nombre = persona.apellido.toUpperCase();
    console.log(nombre)
}

imprimierrNombreMayuscula(luis)