puntosUsuario=0
puntosComputador=0
jugar=function(seleccionado){
    let elemento1;
    let computador
    let ganador;
    elemento1=generarElemento();
    computador=generarRuta(elemento1);
    mostrarImagen("lblComputador", computador);
    ganador=determinarGanador(elemento1,seleccionado);
    if (ganador==0){
        mostrarTexto("lblGanador","EMPATE")
    }
    if(ganador==1){
        mostrarTexto("lblGanador","PERDISTE LA PARTIDA")
        puntosComputador=puntosComputador+1
        mostrarTexto("lblPuntajeComputador",puntosComputador);
        if(puntosComputador==5){
            mostrarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO");
        }
    }
    if(ganador==2){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA")
        puntosUsuario=puntosUsuario+1
        mostrarTexto("lblJugador",puntosUsuario);
        if(puntosUsuario==5){
            mostrarTexto("lblGanador","HAS GANADO EL JUEGO")
        }
    }
}
nuevaPartida=function(){
    mostrarImagen("lblComputador", "");
    mostrarTexto("lblGanador","");
    mostrarTexto("lblPuntajeComputador","0.0");
    mostrarTexto("lblJugador","0.0");
    puntosUsuario=0
    puntosComputador=0
}