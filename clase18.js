var gabriela = {
    nombre:'Gabriela',
    apellido: 'Bato',
    altura: 1.50
}

var luis = {
    nombre:'Luis',
    apellido: 'Banda',
    altura: 1.82
}

var ada = {
    nombre:'adita ',
    apellido: 'Sanchez',
    altura: 1.50
}

var gael = {
    nombre:'Gael',
    apellido: 'Banda',
    altura: 0.70
}

var ismael = {
    nombre:'Ismael',
    apellido: 'Banda',
    altura: 0.35
}

var lucia = {
    nombre:'Lucia',
    apellido: 'sanchez',
    altura: 1.50
}

// const esAlta = (persona) => {
//     return persona.altura > 1.8
// }
// var personas = [gabriela, gael, luis, ismael, lucia, ada]
// // funcion filter()lleva una condicion
// var personasAltas = personas.filter(esAlta)
// console.log(personasAltas)

// fittrado de las personas bajas 
const esAlta = ({altura}) => altura < 1.8
var personas = [gabriela, gael, luis, ismael, lucia, ada]
var personasBajas = personas.filter(esAlta)

console.log(personasBajas)