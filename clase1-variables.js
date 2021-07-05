//como primir algo  y invocar 
console.log('Hola mundo JS!')
//para un hola se declara una variable
var nombre;

nombre = 'luis';
//como utilizar la concatenacion el signo (+)

console.log('hola '+ nombre);
// si queremos que salga mo apellido 
// js podemos asignar variables en el mismo reglon es un lenguaje debilmente tipado no hay nada que diga que la variables es solo texto o numero 

var apellido = 'Banda';
var edad = 31;
console.log('Hola '+nombre + ' ' + apellido);
console.log('Hola '+nombre + ' tengo ' + edad);

//para bolverlo mayusculas las letras toUpperCase()

var nombreEnMayusculas = nombre.toUpperCase();

// para volver minusculas = toLowerCase()
var apellidoEnMinuscula = apellido.toLowerCase();

//como saber la primera letra = charAt()
var primeraLetraDelNombre = nombre.charAt();
//cantidad de letras de un texto = length()
var cantidadDeLetrasDelNombre = nombre.length;

// interpolacion del texto =con estas comiilas ``interpolar variables y tambien se puede volver mayuscuals llamandouna funcion 
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
//para los caracteres 

var str = nombre.charAt(1) + nombre.charAt(2);
var str1 = nombre.substr(1, 2);

//prueba de tarea
var ultimoLetraUsuario = nombre.substr(-1);



// variables numeros 
var peso = 75;

// incremento de numeros
edad += 1;
peso -=1;

// ejemplo con decimales 
var precioVino = 200.3 ;


var total = precioVino * 100 * 3/100;
//para redoncder se coloca =Math.round()

var total1 = Math.round(precioVino * 100 * 3)/ 100;
// lo convierte en string para  llamar y decir que cantidad de cecimales queremos = toFixed()
var totalstr = total.toFixed(3);
//lo combierte en numero = parseFloat()
var total2 = parseFloat(totalstr);
// para dividir 
var personas = 2;
var dinero = 100;
var cuantoLeCorrespondePorPersona = dinero / personas ;
 


