var gabriela = {
    nombre:'Gabriela',
    apellido: 'Bato',
    altura: 1.50
}

var luis = {
    nombre:'Luis',
    apellido: 'Banda',
    altura: 1.68
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

var personas = [gabriela, gael, luis, ismael, lucia, ada]

for (let i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log (`${persona.nombre} mide ${persona.altura} mts`)    
}