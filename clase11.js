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

// function imprimirProfesiones(persona){
//     // esto se llama template strink las comillas invertidas
//     console.log(`${persona.nombre} es:`)
//     if (persona.ingeniero) {
//         console.log('Ingeniero')
//     }
//     if (persona.cocinero) {
//         console.log('Cocinero')
//     }
//     if (persona.dj) {
//         console.log('Dj')
//     }
//     if (persona.cantante) {
//         console.log('Cantante')
//     }

//     if (persona.guitarrista) {
//         console.log('Guitarrista')
//     }

//     if (persona.cocinero) {
//         console.log('Cocinero')
//     }

//     if (persona.drone) {
//         console.log('Piloto de Drone')
//     }
// }
// imprimirProfesiones(luis)

//desafio si es mayor de edad
function esMayorDeEdad(persona) {
    return persona.edad >= 18    
}
function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} es:`)
    if(esMayorDeEdad(persona)){
        console.log(' mayor de edad')
    }else{
        console.log('no es mayor de edad')
    }
}

// imprimirSiEsMayorDeEdad(luis);

