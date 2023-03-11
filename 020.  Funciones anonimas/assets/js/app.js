function ejecutaFuncion( fn ){
    if(fn() === 1 ){
        return true;
    }else{
        return false;
    }
};

console.log(
    ejecutaFuncion(
        function(){
            console.log('Funcion anónima ejecutada!');
            return 0;
        }
    )
)

