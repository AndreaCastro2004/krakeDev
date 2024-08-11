calcularTasaInteres=function(ingresoAnual){
    let valorTasa;
    let ingresoAnualFloat;
    ingresoAnualFloat=parseFloat(ingresoAnual);
    if(ingresoAnualFloat<300000 ){
        valorTasa=(16/360)*ingresoAnualFloat //tasa del 16%
        return valorTasa
    }else if(ingresoAnualFloat>=300000 && ingresoAnualFloat<500000){
        valorTasa=(15/360)*ingresoAnualFloat //tasa 15%
        return valorTasa
    }else if(ingresoAnualFloat>=500000 && ingresoAnualFloat<1000000){
        valorTasa=(14/360)*ingresoAnualFloat //tasa 14%
        return valorTasa
    }else if(ingresoAnualFloat>=1000000 && ingresoAnualFloat<2000000){
        valorTasa=(13/360)*ingresoAnualFloat //tasa 13%
        return valorTasa
    }else if(ingresoAnualFloat>=2000000){
        valorTasa=(12/360)*ingresoAnualFloat  //tasa 12%
        return valorTasa
    }
};
calcularCapacidadPago=function(edad,ingresos,egresos){
    let montoDisponible;
    let valorCuota;
    //let cuotaMensual;
    let edadEntero;
    let ingresoFloat;
    let egresoFloat;
    edadEntero=parseInt(edad);
    ingresoFloat=parseFloat(ingresos);
    egresoFloat=parseFloat(egresos);
    if(edadEntero>50){
        montoDisponible=egresoFloat-ingresoFloat
        valorCuota=((montoDisponible*30)/100) //saco el valor por su capacidad del 30% para que me de la cuota mensual
        //cuotaMensual=valorCuota/12   esto se agregaria si se tiene un plazo de meses
        return valorCuota;
    }else if(edadEntero>0 && edadEntero<=50){
        montoDisponible=egresoFloat-ingresoFloat
        valorCuota=((montoDisponible*40)/100) //capacidad 40%
        return valorCuota;
    }
}
calcularDescuento=function(precio,cantidad){
    let precioFloat;
    let cantidadInt;
    let descuento;
    let subtotal;
    let valorApagar;
    precioFloat=parseFloat(precio);
    cantidadInt=parseInt(cantidad);
    if(cantidad>=0 && cantidad<3){
        valorApagar=precio*cantidad
        return valorApagar
    }else if(cantidadInt>=3 && cantidadInt<=5){
        subtotal=precio*cantidad
        descuento=(subtotal*2)/100  //2% de descuento
        valorApagar=subtotal-descuento
        return valorApagar;
    }else if(cantidadInt>=6 && cantidadInt<=11){
        subtotal=precio*cantidad
        descuento=(subtotal*3)/100  //3% de descuento
        valorApagar=subtotal-descuento
        return valorApagar;
    }else if(cantidadInt>=12){
        subtotal=precio*cantidad
        descuento=(subtotal*4)/100  //4% de descuento
        valorApagar=subtotal-descuento
        return valorApagar;
    }


}
determinarColesterolLDL=function(nivelColesterol){
    let colesterolFloat;
    let mensaje;
    colesterolFloat=parseFloat(nivelColesterol)
    if(colesterolFloat<100){
        mensaje="El nivel de colesterol es de "+colesterolFloat+" y se encuentra en la categoria: Optimo"
        return mensaje;
    }else if(colesterolFloat>=100 && colesterolFloat <=129){
         mensaje="El nivel de colesterol es de "+colesterolFloat+" y se encuentra en la categoria: Casi Optimo"
         return mensaje;
    }else if(colesterolFloat>=130 && colesterolFloat <=159){
        mensaje="El nivel de colesterol es de "+colesterolFloat+" y se encuentra en la categoria: Limite superior del rango normal"
        return mensaje;
    }else if(colesterolFloat>=160 && colesterolFloat <=189){
        mensaje="El nivel de colesterol es de "+colesterolFloat+" y se encuentra en la categoria: Alto"
        return mensaje;
    }else if(colesterolFloat >=190 ){
        mensaje="El nivel de colesterol es de "+colesterolFloat+" y se encuentra en la categoria: Muy alto"
        return mensaje;
    }
}
validarClave=function(clave){
    let claveIngresada;
    if(clave>=8 && clave <=16){
        claveIngresada=true
        return claveIngresada;
    }else{
        claveIngresada=false
        return claveIngresada;
    }
}
esMayuscula=function(caracter){
    let cadena;
    let mayuscula;
    cadena=caracter.CharCodeAt(0);
    if(cadena>=65 && cadena<=90){
        mayuscula=true
        return mayuscula
    }else{
        mayuscula=false
        return mayuscula
    }
}
esMinuscula=function(caracter){
    let cadena;
    let minuscula;
    cadena=caracter.CharCodeAt(0);
    if((cadena==160 || cadena==130 || cadena==161 || cadena==162 || cadena==163) || (cadena>=97 && cadena<=122) ){
        minuscula=true
        return minuscula
    }else{
        minuscula=false
        return minuscula
    }
}
esDigito=function(caracter){
    let cadena;
    let digito;
    cadena=caracter.CharCodeAt(0);
    if(cadena>=48 && cadena<=57){
        digito=true
        return digito;
    }else{
        digito=false
        return digito;
    }
}
darPermiso=function(notaMate,notaFisica,notaGeometria){
    let mateFloat;
    let fisicaFloat;
    let geometriaFloat;
    let permiso
    mateFloat=parseFloat(notaMate);
    fisicaFloat=parseFloat(notaFisica);
    geometriaFloat=parseFloat(notaGeometria);
    if(notaMate>90 || notaFisica>90 || notaGeometria>90){
        permiso=true
        return permiso
    }else{
        permiso=false
        return permiso
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let mateFloat;
    let fisicaFloat;
    let geometriaFloat;
    let permiso
    mateFloat=parseFloat(notaMatematica);
    fisicaFloat=parseFloat(notaFisica);
    geometriaFloat=parseFloat(notaGeometria);
    if((mateFloat>90 || fisicaFloat>90)&&(notaGeometria>80)){
        permiso=true
        return permiso
    }else{
        permiso=false
        return permiso
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let mateFloat;
    let fisicaFloat;
    let geometriaFloat;
    let permiso
    mateFloat=parseFloat(notaMatematica);
    fisicaFloat=parseFloat(notaFisica);
    geometriaFloat=parseFloat(notaGeometria);
    if((mateFloat>90 || fisicaFloat>90 || geometriaFloat>90)&&(fisicaFloat>mateFloat)){
        permiso=true
        return permiso
    }else{
        permiso=false
        return permiso
    }
}