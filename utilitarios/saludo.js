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
    let mensajeBienvenida="Bienvenido "+ nombre +" "+ apellido;

    mostrarTexto("lblResultado",mensajeBienvenida);

    mostrarImagen("imgSaludo","./imagenes/imagen1.gif");

    mostrarTextoEnCaja("txtNombre","");
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
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje

}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen

}