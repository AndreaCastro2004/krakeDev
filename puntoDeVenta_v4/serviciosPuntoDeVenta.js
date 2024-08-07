
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