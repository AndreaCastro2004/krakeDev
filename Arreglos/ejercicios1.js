//Variable tipo arreglo
let notas=[];

agregarElementos=function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice]
        console.log(notaR);
    }
}
provarAgregar=function(){
    let notaRecuperada;
    notaRecuperada=recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}
agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
}
ejecutarPromedio=function(){
    let promedio;
    promedio=calcularPromedio();
    mostrarTexto("lblPromedio",promedio);
}
calcularPromedio=function(){
    let notaR;
    let sumaNotas=0
    let promedio;
    for(let posicion=0;posicion<notas.length;posicion++){
        notaR=notas[posicion]
        sumaNotas=notaR+sumaNotas
    }
    promedio=sumaNotas/notas.length
    return promedio;
}
generarTabla=function(){
    let contenidoTabla=""
    let cmpTabla=document.getElementById("divTabla");
    contenidoTabla+="<table><tr><td>UNO</td></tr></table>"+"<table><tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML=contenidoTabla

}
mostrarNotas=function(){
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let cmpTabla=document.getElementById("divTabla");
    let miNota;
    for(let i=0;i<notas.length;i++){
        miNota=notas[i]
        contenidoTabla+="<tr><td>"
        contenidoTabla+=miNota
        contenidoTabla+="</tr></td>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla
}