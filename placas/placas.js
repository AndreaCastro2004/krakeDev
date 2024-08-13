validarPlaca=function(){
    let componente;
    let valorIngresado;
    let erroresEstructura;
    componente=document.getElementById("txtPlaca");
    valorIngresado=componente.value;
    erroresEstructura=validarEstructura(valorIngresado);
    if (erroresEstructura == null){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErroresValidacion",erroresEstructura)
    }
}