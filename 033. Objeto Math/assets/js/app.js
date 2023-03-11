var PI = Math.PI;
var E = Math.E;



console.log(PI);
console.log(E);


var num1 = 10.456789;

console.log(num1);

console.log('Visualizar con 2 decimales Math.round -> '+Math.round(num1*100)/100);

console.log('Sin redondeo Math.floor -> '+Math.floor(num1));

var rnd = Math.random();

console.log('Random -> '+rnd);

function randomEntre(min,max){

    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(''+randomEntre(1,6));
