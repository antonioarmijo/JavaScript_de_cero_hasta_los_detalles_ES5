var aguments = 10;

function miFuncion(a,b,c,d){
    console.log(arguments)
}

function miFuncion2(a,b,c,d,){
    if(arguments.length !== 4){
        console.error("La funcion necesita 4 parámetros, parámetros ingresados: "+arguments.length);
        return;
    }

    console.log(a+b+c+d);
}

miFuncion(10,'b',344,40,{},function(){});

miFuncion2(1,2);