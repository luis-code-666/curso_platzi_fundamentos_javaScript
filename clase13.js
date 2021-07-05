var luis = {
    nombre: 'luis',
    apellido: 'Banda',
    edad: 31,
    peso: 75
}

console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso} kg`)

const INCREMENTA_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentaDePeso = persona => persona.peso += INCREMENTA_PESO
const adelgazar = persona => persona.peso += INCREMENTA_PESO

for (let i = 1; i <= DIAS_DEL_ANO; i++){
    const random = Math.random();
    
    if (random < 0.25 ) {
        aumentaDePeso(luis)
    }else if (random < 0.5) {
        adelgazar(luis)
    }
}
console.log(`Al inicio del año ${luis.nombre} pesa ${luis.peso.toFixed(2)} kg`)