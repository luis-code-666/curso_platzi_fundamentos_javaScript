var gabriela = {
    nombre:'Gabriela',
    apellido: 'Bato',
    altura: 1.50,
    cantidadDeLibros: 111
}

var luis = {
    nombre:'Luis',
    apellido: 'Banda',
    altura: 1.82,
    cantidadDeLibros: 13

}

var ada = {
    nombre:'adita ',
    apellido: 'Sanchez',
    altura: 1.50,
    cantidadDeLibros: 56

}

var gael = {
    nombre:'Gael',
    apellido: 'Banda',
    altura: 0.70,
    cantidadDeLibros: 111
}

var ismael = {
    nombre:'Ismael',
    apellido: 'Banda',
    altura: 0.35,
    cantidadDeLibros: 100

}

var lucia = {
    nombre:'Lucia',
    apellido: 'sanchez',
    altura: 1.50,
    cantidadDeLibros: 158
}
// const esAlta = (persona) => {
//     return persona.altura > 1.8
// }
// var personas = [gabriela, gael, luis, ismael, lucia, ada]
// // funcion filter()lleva una condicion
// var personasAltas = personas.filter(esAlta)
// console.log(personasAltas)

// fittrado de las personas bajas 
// const esAlta = ({altura}) => altura < 1.8
var personas = [gabriela, gael, luis, ismael, lucia, ada]
// var personasBajas = personas.filter(esAlta)

// console.log(personasBajas)



// el metodo map() devuelve otra funcion del metodo actual 


// const pasarAlturasACms = persona => {
//     // persona.altura = persona.altura * 100 es tambien  persona.altura *= 100
//     // return persona 

//     // esto sirve para no modifiar al objeto anterio por eso se coloca asi para crear nuestro nuevo objeto 
//     return{
//         ...persona,
//         altura: persona.altura * 100
//     }
// }
//para devolver un arroy fancion de otra manera asi se puede ver mejor que el de arriba 
const pasarAlturasACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    
})

var personaCms = personas.map(pasarAlturasACms)



//el metodo reduce() es reducir un array a un valor unico

// una opcion

// var acum = 0 
// for (var i = 0; i < personas.length; i++) {
//     acum= acum + personas[i].cantidadDeLibros
    
// }

const reducer = (acum, persona)=>{
    return acum + persona.cantidadDeLibros
}
var totaoDeLibros = personas.reduce(reducer,0)
console.log(`En total todos tienen ${totaoDeLibros} libros`)