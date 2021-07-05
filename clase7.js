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
// son lo mismo esytas dos 
    //var nombre = persona.nombre
    var{ nombre } = persona;

    var edad = persona.edad
    console.log(`hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)
}

imprimierrNombreMayuscula(luis)
imprimierrNombreMayuscula(angel)