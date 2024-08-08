jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
// funcion mostrar cara y recibe el numero que quiere mostrar
//Muestra la imagen correspondiente al numero que recibe
//No retorna nada
mostrarCara=function(numero){
    if (numero==1){ //con == se compara y con = se asigna 
        cambiarImagen("imgDados","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDados","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDados","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDados","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDados","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDados","dados6.png");
    }
}