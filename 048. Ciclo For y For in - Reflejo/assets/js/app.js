var Persona = function(){
    this.nombre = "Juan",
    this.apellido = "Pineda",
    this.edad = 30
}

var juan = new Persona();

Persona.prototype.direccion = "San José";

for ( prop in juan ){
    if (!juan.hasOwnProperty (prop))
    continue;

    console.log(prop, ": ",juan[prop]);
    
}

for (num in [1,2,3,4,5,6,7,8,9,10]){
    console.log(num);
    
}

[1,true,3,4,false,6,7,"José",9,10].forEach(function(val){
    console.log(val);

});






