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
//con esto debuelve un objeto de otro objeto
function cumpleanos(persona){
    return{
        //esto de descgloza con los puntos 
        ...persona,
        edad: persona.edad + 1
    }
}