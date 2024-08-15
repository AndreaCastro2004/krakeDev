ejecutarValidacion=function(){
    let caja;
    let valorCaja;
    let resultado;
    caja=document.getElementById("txtCaja");
    valorCaja=caja.value;
    resultado=validarPassword(valorCaja);
    if(resultado==""){
        mostrarTexto("lblResultado","PASSWOR CORRECTO");
    }else{
        mostrarTexto("lblResultado",resultado)
    }
}
validarPassword=function(password){
    let longitud;
    let mayuscula;
    let digito;
    let especial;
    let existeMayuscula=false
    let existeDigito=false
    let existeEspecial=false
    let error=""


    longitud=password.length
    if(longitud>=8 && longitud <=16){
        for(let posicion=0;posicion<=password.length;posicion++){
            caracter=password.charAt(posicion);
            mayuscula=encontrarMayuscula(caracter)
            if(mayuscula==true){
                existeMayuscula=true
            }
        }
        for(let posicion=0;posicion<=password.length;posicion++){
            caracter=password.charAt(posicion);
            digito=validarDigito(caracter)
            if(digito==true){
                existeDigito=true        
            }
        }
        for(let posicion=0;posicion<=password.length;posicion++){
            caracter=password.charAt(posicion);
            especial=caracterEspecial(caracter);
            if(especial==true){
                existeEspecial=true       
            }
        }
        if(existeMayuscula==false){
            error+=" Debe tener almenos 1 letra mayuscula. "
        }
        if(existeDigito==false){
            error+=" Debe tener almenos 1 digito. "
        }
        if(existeEspecial==false){
            error+=" Debe tener almenos 1 caracter Especial. "
        }
    }else{
        if(longitud<8){
            error+="MINIMO 8 CARACTERES"
        }   
        if(longitud>16){
            error+="MAXIMO 16 CARACTERES"
        }
    }
    return error;
}

