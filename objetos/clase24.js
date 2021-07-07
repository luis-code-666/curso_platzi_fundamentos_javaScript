//orientado a objetos para definir un prototipo solo se pone una funcion 
//Los prototipos son un conjunto de normas para integrar Programación Orientada a Objetos en JavaScript. Entonces, siguiendo estas reglas nosotros debemos ser capaces de crear las distintas metodologías de la Orientación a Objetos: 
function heredaDe(prototipoHijo, prototipoPadre) {
    // fn es una funcion vasia tambien noo
    var fn = function () { }

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo

}
function Persona(nombre,apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// var margarita = new Desarrollador('Margarita', 'López', 1.72)
function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador/a`)
    
}


// var luis = new Persona('Luis', 'Banda', 1.82)
// var margarita = new Persona('Margarita', 'López', 1.72)


// luis.saludar()


//desafio para ver si soy alto 

// Persona.prototype.soyAlto = function () {
//     console.log(
//         this.altura > 1.80 
//         ? `Hola, me llamo ${this.nombre}  y soy alto/a` 
//         : `Hola, me llamo ${this.nombre}  y soy bajo/a`)
// }
// luis.soyAlto();
// margarita.soyAlto()

// el prototipo es un objeto mas de javascript
// que pasa con arrow funcion que tenga un this son algunas fallas que pasa al momento de hacer codigo 
// this es de wuindows 