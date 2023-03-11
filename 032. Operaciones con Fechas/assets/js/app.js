var fecha = new Date(2016,1,20);

console.log(fecha);
console.log(fecha.sumarAnios(2));

console.log(fecha.sumarDias(9));



Date.prototype.sumarDias = function( dias ){
    this.setDate( this.getDate()+dias);
    return this;
}

Date.prototype.sumarAnios = function( anios ){
    this.setFullYear( this.getFullYear()+anios);
    return this;
}
    