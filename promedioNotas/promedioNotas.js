calcularPromedioNotas=function(){
    let valorUno;
    let valorDos;
    let valorTres;
    let promedio;
    let valorPromedio;

    valorUno=RecuperarFloat("txtNota1");
    valorDos=RecuperarFloat("txtNota2");
    valorTres=RecuperarFloat("txtNota3");
    promedio=calcularPromedio(valorUno,valorDos,valorTres);
    valorPromedio=promedio.toFixed(2);
    mostrarTexto("lblPromedio",valorPromedio);

}