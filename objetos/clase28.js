const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

    $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}` , { crossDomain: true},function (luke) {
        console.log(`Hola yo soy, ${luke.name}`)
    })

//colvag se puede llamar en un futuro 
// Los que desean, les dejo algunos links para que usen otras APIS.

// Rick and Morty: https://rickandmortyapi.com/
// Pokemon: https://pokeapi.co/
// StarWars: https://swapi.dev/
// Harry Potter: https://www.potterapi.com/
