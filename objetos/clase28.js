const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}

// const onPeopleResponse = function (persona) {
//     console.log(`Hola yo soy, ${persona.name}`)
// }

//colvag se puede llamar en un futuro 
// Los que desean, les dejo algunos links para que usen otras APIS.

// Rick and Morty: https://rickandmortyapi.com/
// Pokemon: https://pokeapi.co/
// StarWars: https://swapi.dev/
// Harry Potter: https://www.potterapi.com/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ahora haremos un llamdo de varios nombres 
// function obtenerPersonaje(id) {
//     const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
//     $.get( url , opts , onPeopleResponse)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//como garantizar el llmado sea correlativo 
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get( url , opts , function (persona) {
        console.log(`Hola yo soy, ${persona.name}`)
    })
if (callback) {
    callback()
}
}

obtenerPersonaje(1,function () {
    obtenerPersonaje(2,function () {
        obtenerPersonaje(3)
    })
})