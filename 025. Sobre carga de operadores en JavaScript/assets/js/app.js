function crearProducto(nombre, precio){
    nombre = nombre || "Sin nombre";
    precio = precio || 0;

    console.log("nombre: "+nombre);
    console.log("precio: "+precio);
    console.log("")
}

function crearProducto100(nombre){
    crearProducto(nombre,100);
}

function crearCamisa(precio){
    crearProducto("Camisa",precio);
}


crearProducto("Lentes",200000);
crearProducto100("Super 8");
crearCamisa(17500);

