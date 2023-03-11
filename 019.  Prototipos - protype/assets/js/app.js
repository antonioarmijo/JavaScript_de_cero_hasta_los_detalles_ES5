function Persona(){
    this.nonbre = "Shiki";
    this.apellido = "Tohno";
    this.edad = 34;
}

Persona.prototype.imprimirInfo = function(){
    console.log(this.nonbre + " " + this.apellido + " ("+this.edad+")");        
}

var persona = new Persona();
