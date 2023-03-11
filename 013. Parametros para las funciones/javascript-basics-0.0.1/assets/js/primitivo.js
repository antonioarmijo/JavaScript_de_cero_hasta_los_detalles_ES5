let nombre = 'Perter Parker';

console.log(nombre);


nombre = 'Ben Parker';

console.log(nombre);

nombre = 'Tía May';


console.table("nombre:" + typeof nombre);

nombre = 123;

console.table("nombre:" + typeof nombre);

let esMarvel = false;
console.table("esMarvel:" + typeof esMarvel);


let edad = 33;
edad = 33.001;
console.table("edad:" + typeof edad);

let superPoderDeSpiderman;
console.table("superPoderDeSpiderman:" + typeof superPoderDeSpiderman);

let soyNull = null;
console.table("soyNull:" + typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.table("symbol1:" + typeof symbol1);
console.table("symbol2:" + typeof symbol2);

console.log(symbol1 === symbol2);