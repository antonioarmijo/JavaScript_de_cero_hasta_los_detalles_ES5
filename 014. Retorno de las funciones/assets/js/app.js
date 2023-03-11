function obtenerAleatorio(){
    return Math.round(Math.random()*10);
}


console.log( obtenerAleatorio());


function obtenerNombre(){
    return "Juan";
}

console.log(obtenerNombre() + " " + "Padilla")

function esMayor5(){
    return (obtenerAleatorio() > 5)
}

console.log(esMayor5())


function crearPersona(nombre, apellido){
    return{
        nombre:nombre,
        apellido:apellido
    }
}

var persona = crearPersona("Antonio","Armijo");

console.table(persona);

function creaFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);
            return function(){
                console.log("Segunda función")
            }
    }
}

var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();

//nuevaFuncion(persona.apellido);