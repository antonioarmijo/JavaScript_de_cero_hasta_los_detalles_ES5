function crearCookie(nombre, valor){
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1) ;
    document.cookie = nombre+"="+ valor +";expires=" + hoy.toUTCString()+ ";";
}

function borrarCookie(nombre){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);
    document.cookie = nombre+"=empty" +";expires="+hoy.toUTCString()+";";
}

function getCookie(nombre){
    var cookies = document.cookie;

    var cookieArr = cookies.split("; ");
    console.log(cookieArr);
    
    for(var i = 0; i <cookieArr.length; i++){
        var parArr = cookieArr[i].split("=");
        cookieArr[i]=parArr;

        if(parArr[0] === nombre){
            return unescape(parArr[1]);
        }
        
    }


    return undefined;


}


crearCookie('nombre','fernando');
crearCookie('correo','fernando.herrera85@gmail.com');
crearCookie('direccion','San José, Costa Rica');
crearCookie('tmp','San José');



var cookies = document.cookie;

console.table(cookies);

console.log("call - getCookie: "+getCookie('direccion'));

