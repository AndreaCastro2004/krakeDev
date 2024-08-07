

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
