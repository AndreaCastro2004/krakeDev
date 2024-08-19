let frutas=["PERA","BANANA","MANZANA"]

probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("lblFruta");
    let resultado;
    resultado=buscar(frutaIngresada)
    if(resultado ==null){
        alert("NO EXISTE LA FRUTA")
    }else{
        alert(frutaIngresada+" EXISTE EN EL CESTO")
    }
}

buscar=function(fruta){
    let elemento;
    let frutaEncontrada=null
    for(i=0;i<frutas.length;i++){
        elemento=frutas[i]
        if(fruta==elemento){
            frutaEncontrada=fruta
            break;
        }
    }
    return frutaEncontrada;
}