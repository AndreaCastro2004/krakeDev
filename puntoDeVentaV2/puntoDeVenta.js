calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let descuentoIva;
    let valorTotal;
    
    nombreProducto=recuperarTexto("txtProducto");
    cantidad=recuperarInt("txtCantidad");
    precioProducto=recuperarFloat("txtPrecio");
    if(obligatorio(nombreProducto,cantidad,precioProducto)){
        if(esProductoValido(nombreProducto) & esCantidadValida(cantidad) & esPrecioValido(precioProducto)){
            valorSubtotal=calcularSubtotal(precioProducto,cantidad);
            mostrarTexto("lblSubtotal",valorSubtotal);
            valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
            mostrarTexto("lblDescuento",valorDescuento);
            descuentoIva=calculoDescuentoIva(valorSubtotal,valorDescuento);
            valorIVA=calcularIva(descuentoIva);
            mostrarTexto("lblValorIVA",valorIVA );
            valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
            mostrarTexto("lblTotal",valorTotal);
        }
    }
}    


limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
    mostrarTextoEnCaja("txtCantidad","");
    mostrarTextoEnCaja("txtPrecio","");
    mostrarTextoEnCaja("txtPorcentajeDescuento","");
    mostrarTexto("lblSubtotal","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblValorIVA","0.0");
    mostrarTexto("lblTotal","0.0");

}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    let montoDescuento;
    if(cantidad>=0 && cantidad<3){
        descuento=subtotal
        return descuento
    }else if(cantidad>=3 && cantidad<=5){
        montoDescuento=(subtotal*3)/100
        descuento=montoDescuento
        return descuento;
    }else if(cantidad>=6 && cantidad<=11){
        montoDescuento=(subtotal*4)/100
        descuento=montoDescuento
        return descuento;
    }else if(cantidad>=12){
        montoDescuento=(subtotal*5)/100
        descuento=montoDescuento
        return descuento;
    }
    
}

esProductoValido=function(nombre){
    let tamanio=nombre.length;
    let resultado=false
    if(tamanio>10){
        resultado=mostrarTexto("lblError1","TIENE MAS DE 10 CARACTERES");
        resultado=true
    }
    if(resultado==false){
        resultado=mostrarTexto("lblError1","")
    }
    return !resultado
}

esCantidadValida=function(cantidad){
    let hayErrores=false
        if (cantidad<0 || cantidad>100) {
            hayErrores=mostrarTexto("lblError2","INGRESE CANTIDAD ENTRE 0 Y 100");
            hayErrores=true
        }
        if(hayErrores==false){
            hayErrores=mostrarTexto("lblError2", "");
        }
        return !hayErrores
}

esPrecioValido=function(precio){
    let valido=false
    if(precio<0 || precio>50){
        valido=mostrarTexto("lblError3", "INGRESE PRECIO ENTRE 0 Y 50 ")
        valido=true
    }
    if(valido==false) {
        valido=mostrarTexto("lblError3", "")
    }
    return !valido
}
obligatorio=function(caja1,caja2,caja3){
    let resultado=false
    if(caja1==""){
        resultado=mostrarTexto("lblError1","CAMPO OBLIGATORIO");
        resultado=true
    }
    if(isNaN(caja2)){
        resultado=mostrarTexto("lblError2","CAMPO OBLIGATORIO");
        resultado=true
    }
    if(isNaN(caja3)){
        resultado=mostrarTexto("lblError3","CAMPO OBLIGATORIO");
        resultado=true
    }
    if(resultado==false){
        mostrarTexto("lblError1", "");
        mostrarTexto("lblError2", "");
        mostrarTexto("lblError3", "");
    }
    return !resultado
}
   
