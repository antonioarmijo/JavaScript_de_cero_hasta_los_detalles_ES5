function identifica (param ){
    console.log(typeof param)
}

identifica(1);

function identificaPersona (param){
    console.log(param instanceof Persona)
    return (param instanceof Persona);
}

function Persona(){
    this.nombre = "Shiki";
    this.edad = 34
}

var a = new Persona();

console.log("El valor introducido " + JSON.stringify(a) + " es de tipo Persona: " + identificaPersona(a));
