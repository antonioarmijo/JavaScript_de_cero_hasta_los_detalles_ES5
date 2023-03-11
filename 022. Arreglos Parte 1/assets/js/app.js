//var arr = new Array();

var arr = [5,4,3,2,1,];

console.log(arr);

console.log("Primer elemento: " + arr[0]);

arr.forEach(element => {
    console.log(element);
});

//revertir arreglo
arr.reverse();
console.log("Utilizando reverse");
console.log(arr);

arr = arr.map(function(element){
    element *=element;
    return element;
});
console.log("Utilizando MAP");
console.log(arr);

arr = arr.map(Math.sqrt)
console.log("Utilizando Math.sqrt");
console.log(arr);

arr = arr.join(";");
console.log("Utilizando join");
console.log(arr);

arr = arr.split(";");
console.log("Utilizando split");
console.log(arr);

arr.push("6");
console.log("Utilizando push");
console.log(arr);

arr.unshift("0");
console.log("Utilizando unshift");
console.log(arr);


console.log(arr.toString());

var elemEliminado = arr.pop();
console.log("Utilizando pop");
console.log(arr,elemEliminado);

arr.splice(1,1,"11","20","30");
console.log("Utilizando splice eliminando 1 elemento y agregando 3");
console.log(arr);

arr.splice(1,0,"44","55");
console.log("Utilizando splice sin eliminar elemento y agregando 2");
console.log(arr);

arr = arr.slice(0,4);
console.log("Utilizando slice, los dos parten de cero, primer elemento de donde quiero cortar y segundo hasta donde de ahí hacía atrás");
console.log(arr);