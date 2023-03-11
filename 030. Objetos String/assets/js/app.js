var hoy = new Date();
var fechaMilisegundos = new Date(1);
var ffija = new Date(2023,0,22, 23,11,15,0)

console.log(hoy);
console.log(fechaMilisegundos);
console.log(ffija);

console.log("Año: "+hoy.getFullYear());
console.log("Día: "+hoy.getDate());
console.log("hora: "+hoy.getHours());
console.log("getTime: "+hoy.getTime())


// revisar moment.js