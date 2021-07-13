class Persona {
    constructor(nombre,apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador/a`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}


// Desarrollador.prototype.saludar = function (fn) {
    

// }


function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log('A mira, no sabía que eras desarrollador/a')
    }
}

var margarita = new Persona('Margarita', 'López', 1.72)
var luis = new Persona('Luis', 'Banda', 1.81)
var sacha = new Desarrollador('Sacha', 'Lifszyc', 1.60)


luis.saludar()
margarita.saludar(responderSaludo)
sacha.saludar(responderSaludo)