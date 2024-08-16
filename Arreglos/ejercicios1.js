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