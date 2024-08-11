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
    

    if(valorPromedio>0 && valorPromedio<5){
        mostrarTexto("lblMensaje","REPROBADO")
        mostrarImagen("lblImagen","./imagenes/imagen1.gif");
        valorPromedio=promedio.toFixed(2);
        mostrarTexto("lblPromedio",valorPromedio);
    }else if(valorPromedio>=5 && valorPromedio<=8){
        mostrarTexto("lblMensaje","BUEN TRABAJO")
        mostrarImagen("lblImagen","./imagenes/imagen2.gif"); 
        valorPromedio=promedio.toFixed(2);
        mostrarTexto("lblPromedio",valorPromedio);
    }else if(valorPromedio>8 && valorPromedio<=10){
        mostrarTexto("lblMensaje","EXELENTE")
        mostrarImagen("lblImagen","./imagenes/imagen3.gif"); 
        valorPromedio=promedio.toFixed(2);
        mostrarTexto("lblPromedio",valorPromedio);
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS")
        mostrarImagen("lblImagen","./imagenes/imagen4.gif"); 
    }
}
