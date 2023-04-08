try {
    var a = 100;
    console.log("El valor de a= ",a);

    if(a === 103){
        throw "que mal";
    }else{
        throw "oh oh!";
    }

    
} catch (error) {
   if(error === "que mal"){
    console.log("Error tipo 1");
   }
   if(error==="oh oh!"){
    console.log("Error tipo 2");
    
   }
    
}finally{
    console.log("Finalmente");
    
}