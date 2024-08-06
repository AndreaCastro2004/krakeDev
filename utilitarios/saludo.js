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
    let edad=recuperarInt("txtEdad");
    let estatura=RecuperarFloat("txtEstatura");
}
recuperarInt=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}

RecuperarFloat=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFloat= parseFloat(valorCaja);
    return valorFloat;
}