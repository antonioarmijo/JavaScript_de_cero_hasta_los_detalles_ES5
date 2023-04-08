var objecto = {
    nombre : "antonio",
    edad : 30
}


console.log(objecto);


var objJson = JSON.stringify(objecto);

console.log(objJson);

var objDesdeJson = JSON.parse(objJson);

console.log( objDesdeJson );
