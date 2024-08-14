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
    }
    if(ganador==2){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA")
    }
}