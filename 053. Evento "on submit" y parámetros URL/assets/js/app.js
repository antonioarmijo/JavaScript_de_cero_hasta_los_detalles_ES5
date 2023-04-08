function validar(){

    var nombre = document.getElementById("txtNombre").Value;
    var apellido = document.getElementById("txtApellido").Value;

    if(nombre.length < 1 ){
        return false;
    }
    if(apellido.length < 1 ){
        return false;
    }
    
    return true;
}

console.log(window.location.search);
