function Jugador(nombre){
    
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo){
        
        if(this.sp >= 40){
        
            this.sp -= 40;

            jugadorObjetivo.pv += 20;
            console.log(this.nombre + " cura en 20 PV a "+jugadorObjetivo.nombre);
            this.estado(jugadorObjetivo)
        }else{
            console.info(this.nombre+ " no tiene sufiente SP")
        }

    }
    this.ataqueTirarFecha = function (jugadorObjetivo){
        if(jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40;
            console.log(this.nombre + " hace 40 PV de daño a "+jugadorObjetivo.nombre);
        }else{
            jugadorObjetivo.pv = 0;
            console.log(this.nombre + " hace 40 PV de daño a "+jugadorObjetivo.nombre);
            console.error(jugadorObjetivo.nombre + " A MUERTO!!!!")

        }


        this.estado(jugadorObjetivo)
    }
    this.ataqueEspada = function(jugadorObjetivo){
        if(jugadorObjetivo.pv >=20){
            jugadorObjetivo.pv -= 20;
            console.log(this.nombre+ ' hace 20 PV de daño a '+jugadorObjetivo.nombre);
            
            this.estado(jugadorObjetivo);
        }else{
            jugadorObjetivo.pv =0;
            console.log(this.nombre+ ' hace 20 PV de daño a '+jugadorObjetivo.nombre);
            console.error(jugadorObjetivo.nombre + " A MUERTO!!!!")
            this.estado(jugadorObjetivo);
        }
    }

    this.estado = function (jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
        
    }
}


var gandalf = new Jugador("gandalf");
var legolas = new Jugador("legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);
legolas.ataqueTirarFecha(gandalf);
legolas.ataqueEspada(gandalf);


