ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje)
}

recorrerCadena=function(cadena){
    //0123
    //juan
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }

    for(let posicion=0;posicion<cadena.length-1;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
    }
}
ejecutarPrueba2=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje)
}

invertirCadena=function(cadena){
    let resultado=""
    
    //Recorrer desde la ultima posicion a la pocion cero

    for(posicion=cadena.length; posicion>=0;posicion--){
        resultado +=cadena.charAt(posicion);
    }

    cadenaInvertida=resultado
    mostrarTexto("mensaje",cadenaInvertida);

    
}