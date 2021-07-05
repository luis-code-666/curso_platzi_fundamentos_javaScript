var luis = {
    nombre: 'Luis',
    apellido: 'Banda',
    edad: 31
}
var angel = {
    nombre: 'angel',
    apellido: 'Banda',
    edad: 28
}

function imprimierrNombreMayuscula(persona ){
    var nombre = persona.nombre
    var edad = persona.edad
    console.log(`hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
}

imprimierrNombreMayuscula(luis)
imprimierrNombreMayuscula(angel)

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}