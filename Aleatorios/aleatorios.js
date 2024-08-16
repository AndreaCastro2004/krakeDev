numeroAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let resultado;
    let entero;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*100
    resultado=numeroMultiplicado+1
    entero=parseInt(resultado)
    return entero
}
generarAleatorios=function(){
    let aleatorios=[];
    let numeroRandom;
    let usuario;
    usuario=recuperarTexto("txtCaja");
    if(usuario>=5 && usuario<=20){
        for(let i=0;i<usuario;i++){
            numeroRandom=numeroAleatorio();
            aleatorios.push(numeroRandom)
        }
        mostrarResultado(aleatorios);
    }
}
mostrarResultado=function(arregloNumeros){
    let contenidoTabla="<table><tr><th>ALEATORIOS</th></tr>"
    let componenteTabla =document.getElementById("lblResultado");
    let aleatorio;
    for(let i=0;i<arregloNumeros.length;i++){
        aleatorio=arregloNumeros[i]
        contenidoTabla+="<tr><td>"
        contenidoTabla+=aleatorio;
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    componenteTabla.innerHTML=contenidoTabla
}
