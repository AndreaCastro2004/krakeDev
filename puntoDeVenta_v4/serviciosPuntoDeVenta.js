
calcularSubtotal=function(precio,cantidad){
let totalPagar;
totalPagar=precio*cantidad
return totalPagar;

}

calcularValorDescuento=function(monto,porcentajeDescuento){
let valorDescuento;
valorDescuento=((monto*porcentajeDescuento)/100);
return valorDescuento;
}

calcularIva=function(monto){
    let iva
    iva=((monto*12)/100);
    return iva
}

calculoDescuentoIva=function(valorSubtotal,valorDescuento){
    let monto 
    monto=valorSubtotal-valorDescuento
    return monto
}

