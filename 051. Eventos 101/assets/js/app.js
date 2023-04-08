function evento(){
    console.log( "Me disparé" );
    console.log(arg);
    
}

function returnTexto(obj){
    return obj;
}

var objeto = document.getElementById( "objDemo" );




objeto.addEventListener( "keypress", evento );


