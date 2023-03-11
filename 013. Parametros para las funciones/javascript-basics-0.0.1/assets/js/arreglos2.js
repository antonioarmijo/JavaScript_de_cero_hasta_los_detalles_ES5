let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];

console.table({juegos});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
    
})

let nuevaLongitud = juegos.push('F-Zero');
console.log(nuevaLongitud, juegos);

juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

let elemntoBorrado = juegos.pop();
console.log('elementoBorrado: ' + elemntoBorrado);

console.log(nuevaLongitud, juegos);


let pos = 1;

let borrados  = juegos.splice(pos, 2);
console.table( juegos);
console.table( borrados);

let metroidIndex = juegos.indexOf('Metroid');
console.log('metroidIndex: ' + metroidIndex);