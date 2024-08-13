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
