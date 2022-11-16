var a = 200;
var b = a;

imprimePrimitivo();

var obj1 = {nombre:"Antonio"};
var obj2 = obj1;

imprimeObjeto();

obj1.nombre="Eduardo";
imprimeObjeto();

obj2.nombre="Tohno";
imprimeObjeto();

function imprimePrimitivo(){
    console.log(a)
    console.log(b)
}

function imprimeObjeto(){
    console.log(obj1)
    console.log(obj2)
}