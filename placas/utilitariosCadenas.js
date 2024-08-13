esMayuscula=function(caracter){
    let posicion;
    let primeraPocicion;
    let esMayuscula=false
    primeraPocicion=caracter.charAt(0)
    posicion=primeraPocicion.charCodeAt(0)
    if(posicion>=65 && posicion<=90){
        esMayuscula=true
    }
    return !esMayuscula
}
esDigito=function(caracter){
    let posicion;
    let primeraPocicion;
    let esDigito=false
    primeraPocicion=caracter.charAt(0)
    posicion=primeraPocicion.charCodeAt(0);
    if(posicion>=48 && posicion<=57){
        esDigito=true
    }
    return !esDigito
}
esGuion=function(caracter){
    let posicion;
    let primeraPocicion;
    let esGuion=false
    primeraPocicion=caracter.charAt(0)
    posicion=primeraPocicion.charCodeAt(0);
    if(posicion==45){
        esGuion=true
    }
    return !esGuion
}
