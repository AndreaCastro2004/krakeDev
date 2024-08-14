obtenerAleatorio=function(){
    let randon;
    let numero;
    let entero;
    randon=Math.random();
    numero=randon*4
    entero=parseInt(numero);
    if (entero>=1 && entero <=3){
        console.log(entero)
        return entero;
    }
}
generarElemento=function(){
    let aleatorio;
    let cadenaAleatorio;
    aleatorio=obtenerAleatorio();
    if(aleatorio==1){
        cadenaAleatorio +="PIEDRA"
    }
    if(aleatorio==2){
        cadenaAleatorio +="PAPEL"
    }
    if(aleatorio==3){
        cadenaAleatorio +="TIJERA"
    }
    return cadenaAleatorio;
 }

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let jugador;
    if(eleccionJugador1 == eleccionJugador2){
        jugador="0"
        return jugador
    }
    if((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") || (eleccionJugador1=="tijera" && 
        eleccionJugador2=="papel")|| (eleccionJugador1=="papel" && eleccionJugador2== "piedra")){
        jugador="1"
        return jugador
    }

    if((eleccionJugador2 == "piedra" && eleccionJugador1 == "tijera") || (eleccionJugador2=="tijera" && 
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