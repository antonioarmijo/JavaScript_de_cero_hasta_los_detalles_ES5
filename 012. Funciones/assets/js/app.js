//console.log(console.log('Hola Mundo'));

alert('Hola desde app.js');

let a = 10;
let b = 10;
let c = 'Hola estupido y sensual ';
let d = 'Spider-Man';
let x = a+b;

const saludo=c+d;


console.log('%c Mis variables', 'color: red; font-weight: bold; font-size: 12px');
imprimeRecta();
console.log({x});
console.table({a, b, c, d, x});
imprimeRecta();

// Evitar el uso de var para inicializar variables, ya que podemos sobreescribir variables del objeto window
//var outerWidth = 1000000;
//var outerHeight = 600;

// Para ello en JS se agregaron let y const
let outerWidth = 1000000;
const outerHeight = 600;




function spendTime(){
    for(var x=0; x<=9999999999;x++);
}

function imprimeRecta(){
    console.log('%c ..............................................................................','color:red; font-weight: bold; font-size: 15px');
}

