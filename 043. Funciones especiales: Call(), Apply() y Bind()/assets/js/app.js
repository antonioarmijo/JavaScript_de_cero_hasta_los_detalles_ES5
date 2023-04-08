var carro = {
    color: "blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Negro",
    marca: "Toyota"
}



console.log(carro.imprimir());

var logCarro = function ( arg1, arg2 ){
    console.log("carro: "+ this.imprimir());
    console.log("Argumentos: " + arg1, arg2);
    console.log("===============================");
    
}

var logModeloCarro = logCarro.bind( carro );

logModeloCarro("abc","xyz");

logModeloCarro.call( carro, "123", "456" );
logModeloCarro.apply( carro, ["1111", "2222","3333"] );

console.log(carro.imprimir.call( carro2 ));








