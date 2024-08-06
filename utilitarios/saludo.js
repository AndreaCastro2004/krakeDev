recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado
}

saludar=function(){
    //Recuperar el valor de la caja de texto txtNombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //Recuperar el  valor de la caja de txto txtApellido
    let apellido=recuperarTexto("txtApellido");
}