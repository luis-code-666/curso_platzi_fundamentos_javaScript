var luis = {
    nombre: 'luis',
    apellido: 'Banda',
    edad: 28,
    ingeniero: true,
    cantante: false,
    GUITARRISTA: false,
    cosinero: false,
    drone: true 

}

function imprimirSiEsMayor(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.edad >= 18){
        console.log(' mayor de edad')
    }else{
        console.log('no es mayor de edad')
    }
}
imprimirSiEsMayor(luis)