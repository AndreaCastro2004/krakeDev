calcularPromedioNotas=function(){
    let valorUno;
    let valorDos;
    let valorTres;
    let promedio;
    let valorPromedio;

    valorUno=RecuperarFloat("txtNota1");
    valorDos=RecuperarFloat("txtNota2");
    valorTres=RecuperarFloat("txtNota3");
    promedio=calcularPromedio(valorUno,valorDos,valorTres);
    valorPromedio=promedio.toFixed(2);

    if(valorPromedio>0 && valorPromedio<5){
        mostrarTexto("lblMensaje","REPROBADO")
        mostrarImagen("lblImagen","./imagenes/imagen1.gif");
        mostrarTexto("lblPromedio",valorPromedio);
    }else if(valorPromedio>=5 && valorPromedio<=8){
        mostrarTexto("lblMensaje","BUEN TRABAJO")
        mostrarImagen("lblImagen","./imagenes/imagen2.gif"); 
        mostrarTexto("lblPromedio",valorPromedio);
    }else if(valorPromedio>8 && valorPromedio<=10){
        mostrarTexto("lblMensaje","EXELENTE")
        mostrarImagen("lblImagen","./imagenes/imagen3.gif"); 
        mostrarTexto("lblPromedio",valorPromedio);
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS")
        mostrarImagen("lblImagen","./imagenes/imagen4.gif"); 
    }
}
