// funcion prompt que pregunta algo es igual que el alert que esale desde la consola del navegador

var signo = prompt('¿Cual es tu signo?')
switch (signo) {
    case 'aries':
        console.log('Se sentirá inmerso en la rutina en el trabajo y necesitará encontrar una forma de estimular su creatividad. Un familiar no entenderá sus puntos de vista.')
        break;

    default:
        console.log ('No es un signo zodiacal válido')
        break;
}