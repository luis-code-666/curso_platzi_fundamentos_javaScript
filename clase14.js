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
const adelgazar = persona => persona.peso -= INCREMENTA_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeportes = () => Math.random() < 0.4

const META = luis.peso - 3
var dias = 0


while (luis.peso > META) {
    if (comeMucho()) {
        aumentaDePeso(luis)
    } 
    if (realizaDeportes()) {
        adelgazar(luis)
    }
    dias += 1
 }

console.log(`Pasaron ${dias} dias hasta que ${luis.nombre} adelgazo 3kg`)