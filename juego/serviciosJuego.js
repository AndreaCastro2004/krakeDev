obtenerAleatorio=function(){
    let randon;
    let numero;
    let resultado
    let entero;
    randon=Math.random();
    numeroMultipicado=randon*3
    resultado=numeroMultipicado+1
    entero=parseInt(resultado);
    if (entero>=1 && entero <=3){
        return entero;
    }
}
generarElemento=function(){
    let aleatorio;
    let cadenaAleatorio;
    aleatorio=obtenerAleatorio();
    if(aleatorio==1){
        cadenaAleatorio ="piedra"
        return cadenaAleatorio
    }
    if(aleatorio==2){
        cadenaAleatorio ="papel"
        return cadenaAleatorio
    }
    if(aleatorio==3){
        cadenaAleatorio ="tijeras"
        return cadenaAleatorio
    }
   
 }

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let jugador;
    if(eleccionJugador1 == eleccionJugador2){
        jugador="0"
        return jugador
    }
    if(
        (eleccionJugador1=="piedra" && eleccionJugador2=="tijeras")|| 
        (eleccionJugador1=="papel" && eleccionJugador2== "piedra")|| (eleccionJugador1=="tijeras" && eleccionJugador2== "papel")){
        jugador="1"
        return jugador
    }

    if((eleccionJugador2 == "piedra" && eleccionJugador1 == "tijeras") || (eleccionJugador2=="tijeras" && 
        eleccionJugador1=="papel")|| (eleccionJugador2=="papel" && eleccionJugador1== "piedra")){
        jugador="2"
        return jugador
    }
}
generarRuta=function(nombre){
    let ruta;
    ruta="./imagenes/"+nombre+".png"
    return ruta;
}