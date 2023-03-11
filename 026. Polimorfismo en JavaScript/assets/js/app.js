function determinaDato(obj) {
    if (obj === undefined) {
        console.log("El parámetro es undefined... no se que hacer")
    }

    if (typeof obj === "number") {
        console.log("Parámetro es un número, y puedo hacer operaciones numéricas ")
    }
    if (typeof obj === "string") {
        console.log("Parámetro es un texto, y puedo hacer operaciones con textos ")
    }
    if (typeof obj === "object") {
        console.log("Parámetro es un objecto... pero puede ser cualquier cosa ")
        if(obj instanceof Number){
            console.log("El parámetro es instancia de Number")
        }
    }
    console.table(obj);
}

var numerito = new Number(3);

determinaDato(numerito);