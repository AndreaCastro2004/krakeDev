validarEstructura=function(placa){
    let longitud;
    let primerCaracter;
    let segundoCaracter;
    let tercerCaracter;
    let cuartoCaracter;
    let quintoCaracter;
    let sextoCaracter;
    let septimoCaracter;
    let octavoCaracter; 
    let estructuraValida;
    //errorCaracteres
    let errores = null
    
    //para la longitud de los caracteres 
    longitud=placa.length

    ////para encontrar la posicion de las mayusculas
    primerCaracter=placa.charAt(0);
    segundoCaracter=placa.charAt(1);
    tercerCaracter=placa.charAt(2);
    //para encontrar la posicion del guion
    cuartoCaracter=placa.charAt(3);
    //para pocicion digitos
    quintoCaracter=placa.charAt(4);
    sextoCaracter=placa.charAt(5);
    septimoCaracter=placa.charAt(6);
    octavoCaracter=placa.charAt(7);

    if( longitud ==7 ){
        if(esMayuscula(primerCaracter) & esMayuscula(segundoCaracter) & esMayuscula(tercerCaracter) & 
        esGuion(cuartoCaracter)& esDigito(quintoCaracter)& esDigito(sextoCaracter) & esDigito(septimoCaracter)){
        }
    }
    if(longitud ==8 ){
        if(esMayuscula(primerCaracter) & esMayuscula(segundoCaracter) & esMayuscula(tercerCaracter) & 
        esGuion(cuartoCaracter)& esDigito(quintoCaracter)& esDigito(sextoCaracter) & esDigito(septimoCaracter) & 
        esDigito(octavoCaracter)){
            if (esDigito(octavoCaracter) != false){
                errores+=" El octavo caracter debe ser un digito "
            }
        }
    }
    if((longitud<7 || longitud>8  )){
        errores+=" La placa debe tener de 7 u 8 caracteres "
    }
    if (esMayuscula(primerCaracter) != false){
        errores+=" El primer caracter debe ser Mayuscula "
    }
    if (esMayuscula(segundoCaracter) != false){
        errores+=" El segundo caracter debe ser Mayuscula "
    }
    if ( esMayuscula(tercerCaracter) != false){
        errores+=" El tercer caracter debe ser Mayuscula "
    }
    if(esGuion(cuartoCaracter) != false){
        errores+=" El cuarto Caracter debe ser un guion "
    }
    if (esDigito(quintoCaracter) != false){
        errores+=" El quinto caracter debe ser un digito "
    }
    if (esDigito(sextoCaracter) != false){
        errores+=" El sexto caracter debe ser un digito "
    }
    if (esDigito(septimoCaracter) != false){
        errores+=" El septimo caracter debe ser un digito "
    }

    if(errores != null){
        return errores;
    }else{
        errores=null
        return errores;
    }
}
obtenerTipoVehiculo=function(placa){
    let letra;
    let vehiculo= null
    letra=placa.charAt(1);
    if(letra == "A" || letra == "Z"){
        vehiculo="Vehiculo comercial (como taxis o autobuses)"
    }
    if(letra == "E"){
        vehiculo="Vehiculos Gubernamentales"
    }
    if(letra == "X"){
        vehiculo="Vehiculos de uso Oficial"
    }
    if(letra == "S"){
        vehiculo="Vehiculos de Gobierno Provincial"
    }
    if(letra == "M"){
        vehiculo="Vehiculos Municipales"
    }
    if(letra == "B" || letra== "C" || letra=="D" || letra=="F" || letra=="G" || letra =="H"  || 
        letra == "I" || letra== "J" || letra=="G" || letra=="K" || letra=="L" || letra =="N" || 
        letra =="Ñ" ||letra == "O" || letra== "P" || letra=="Q" || letra=="R"|| 
        letra == "T" || letra== "U" || letra=="V" || letra=="W" || letra=="Y" ){
        
            vehiculo="Vehiculo Particular (PRIVADO)"
    }
    if(vehiculo != null){
        return vehiculo;
    }else{
        vehiculo=null
        return vehiculo;
    }
}
obtenerDiaPicoYPlaca=function(placa){
    let letra;
    let ultimaPocicion;
    let plicoYPlaca=null
    letra=placa.length-1;
    ultimaPocicion=placa.charAt(letra);
    if(ultimaPocicion==1 || ultimaPocicion ==2){
        plicoYPlaca=" Lunes "
        return plicoYPlaca;
    }
    if(ultimaPocicion==3 || ultimaPocicion ==4){
        plicoYPlaca=" Martes "
        return plicoYPlaca;
    }
    if(ultimaPocicion==5 || ultimaPocicion ==6 ){
        plicoYPlaca=" Miercoles "
        return plicoYPlaca;
    }
    if(ultimaPocicion==7 || ultimaPocicion ==8 ){
        plicoYPlaca=" Jueves "
        return plicoYPlaca;
    }
    if(ultimaPocicion==9 || ultimaPocicion ==0){
        plicoYPlaca="viernes "
        return plicoYPlaca;
    }
}