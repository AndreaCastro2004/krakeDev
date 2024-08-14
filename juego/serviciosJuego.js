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
        cadenaAleatorio ="PIEDRA"
        console.log(cadenaAleatorio)
        return cadenaAleatorio;
    }
    if(aleatorio==2){
        cadenaAleatorio="PAPEL"
        console.log(cadenaAleatorio);
        return cadenaAleatorio;
    }
    if(aleatorio==3){
        cadenaAleatorio="TIJERA"
        console.log(cadenaAleatorio);
        return cadenaAleatorio;
    }
}