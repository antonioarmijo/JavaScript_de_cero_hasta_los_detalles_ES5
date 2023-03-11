var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola 9 Mundo";


var arr1 = texto.match(reg1); //Ok: retorna un arreglo | nook: null
var arr2 = texto.match(reg2); //Ok: retorna un arreglo | nook: null
var arr3 = texto.match(/^H[a-z]/); //Ok: retorna un arreglo | nook: null
var arr4 = texto.match(/[a-z]/);
var arr5 = texto.match(/\s/);//busca cualquier separación
var arr6 = texto.match(/\w/);//[a-zA-z0-9]
var arr7 = texto.match(/\d/);// rescata número

console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);

//i = insensitive
//g = todas las apariciones
//m = multilinea

var arr8 = texto.match(/m/i);
var textoVolMay = 'HOla MUndo';
var arr9 = textoVolMay.match(/[aeiou]/ig);
console.log(arr8);
console.log(arr9);
var texto = "Holaa mundoo Hoola de nuevoo";
var arr10 = texto.match(/o{2,}/g);//{2,3} repeticion de 2 a 3 ejemplo considera oo y ooo
console.log(arr10);

var texto = "La respuesta de la suma es: 45 + 60 = 105";
var arr11 = texto.match(/\d{1,}/g); //rescata solo los número
console.log(arr11);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet





