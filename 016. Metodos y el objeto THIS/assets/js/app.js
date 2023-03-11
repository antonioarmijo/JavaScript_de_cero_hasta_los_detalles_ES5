var nombre = "Antonio";
var persona = {

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);
    },
    direccion:{
        pais:"Costa Rica",
        obtenerPais:function(){
            console.log("La direccion es en: " + this.pais);
        }
    }
}

persona.imprimirNombre();

persona.nombre = nombre;

persona.imprimirNombre();

persona.direccion.obtenerPais();