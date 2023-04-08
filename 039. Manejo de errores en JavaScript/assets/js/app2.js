console.log("app2.js");

try {
    throw new Error("Error tipo 1");
} catch (error) {
   registroError(error);
    console.log("Finalmente!");
    
}

function registroError(e){
    var hora = new Date();
    console.log(hora.toTimeString() +" - Se registro un error: ",e.message);
    
}