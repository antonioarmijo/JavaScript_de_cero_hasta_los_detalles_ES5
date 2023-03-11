function Persona(nombre, apellido, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 34;

    this.direccion = direccion;

    this.nombreCompleto = function(){
        return this.nombre + " " +this.apellido+ " ("+this.edad+")";
    }
}

function Direccion(calle, numero, ciudad,pais){
    this.calle = calle;
    this.numero = numero;
    this.ciudad = ciudad;
    this.pais = pais;
}

var direccion = new Direccion("Salto del Agua",235,"Valparaíso","Chile");
var juan =  new Persona("Shiki","Tohno",direccion);

console.log(juan);

console.log(juan.nombreCompleto());
