var luis = {
    nombre: 'luis',
    apellido: 'Banda',
    edad: 28,
    ingeniero: true,
    cantante: false,
    guitarrista: false,
    cocinero: false,
    drone: true,
    dj: false

}

var angel = {
    nombre: 'Angel',
    apellido: 'gomez',
    edad: 13
}

// imprimirProfesiones(luis)

//desafio si es mayor de edad
const MAYORIA_DE_EDAD = 18
//arroy functions es igual que la funcion solo se pone en ves de la funcion     => pero delante de sus parentesisn de la funcion tambien si hay una sola variable se borra sus parentesis 
var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD    
}
//ver avajo
var esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD    
}
// function esMayorDeEdad(persona) {
//     return persona.edad >= MAYORIA_DE_EDAD    
// }
function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    if(esMayorDeEdad(persona)){
        console.log(' mayor de edad')
    }else{
        console.log('no es mayor de edad')
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}
// imprimirSiEsMayorDeEdad(luis);

