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
buscarLetra=function(cadena,letra){
    let letraIterada;
    let existeLetra=false

    for(let i=0;i<cadena.length;i++){
        letraIterada=i.charAt(i)
        if(letraIterada==letra){
            existeLetra=true
        }
    }
    if(existeLetra==true){
        console.log("existe")
        return true;
    }else{
        console.log("no existe")
        return false;
    }
}
contarMayusculas=function(cadena){
    let letra;
    let contadorMayuscula=0
    for(i=0; i<cadena.length;i++){
        letra=cadena.charAt(i);
    }
    //con la funcion es mayuscula que no esta en utilitarios pero la tenemos en otro archivo
    if(esMayuscula(letra)){
        //Es lo mismo que contadorMayuscula=contadorMayuscula+1
        contadorMayuscula++
    }
    console.log(contadorMayuscula)
}