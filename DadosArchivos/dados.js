jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);

    if(aleatorio>3){
        cambiarTexto("lblMensaje","Mayor a 3 FELICIDADES GANASTE");
    }else{ 
        cambiarTexto("lblMensaje","Menor a 3 PERDISTE SUERTE LA PROXIMA");
    }
}
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random(); //numero entre 0 y 1
    numeroMultiplicado=aleatorio*6
    //console.log(numeroMultiplicado); cuando multiplicamos el aleatorio por  6 nos da numeros entre 0 y 5
    numeroEntero=parseInt(numeroMultiplicado);
   // console.log( "----->"+numeroEntero); si lo volvemos entero ya no nos da decimales
    valorDado=numeroEntero+1
    //console.log( "------------>"+valorDado); si le agregamos uno podemos hacer qeue el dado nos de 6S
    return valorDado;
}