obtenerAleatorio=function(){
    let randon;
    let numero;
    let entero;
    randon=Math.random();
    numero=randon*4
    entero=parseInt(numero)
    if (entero>=1 && entero <=3){
        console.log(entero)
    }
}