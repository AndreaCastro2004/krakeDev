let puntos;   //las 2 occiones son validas
puntos=0;
let lanzamientos=5;


jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
    
    
}

//no recibe parametros resta 1 a la variable lanzamientos
//guarda el resultado en la misma variable y muestra en pantalla
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1
    cambiarTexto("lblLanzamientos",lanzamientos);
    //si llega a cero mostrar perdiste
    if(lanzamientos==0){
        cambiarTexto("lblMensaje","GAME OVER");
        limpiar();
    }      
}
limpiar=function(){
    //Coloca el puntaje en 0 y el lanzamiento en 5
    cambiarTexto("lblPuntos",puntos=0);
    cambiarTexto("lblLanzamientos",lanzamientos=5);
    cambiarImagen("imgDados","");
}

modificarPuntos=function(numero){  
    puntos=puntos+numero
    cambiarTexto("lblPuntos",puntos);
    //si o btiene mas de 20 mostrar ganaste
    if(puntos>20){
        cambiarTexto("lblMensaje","GANASTE!!");
        limpiar();
    }
   
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