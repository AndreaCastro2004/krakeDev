//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula=function(caracter){
    let letra;
    let mayuscula=false
    letra=caracter.charCodeAt(0);
    if(letra>=65 && letra<=90){
        mayuscula=true
    }else{
        mayuscula=false
    }
    return mayuscula;
}
guardarPalabra=function(){
    let componente;
    let valorIngresado;
    let letraMayuscula;
    let longitud;
    let letra;
    componente=document.getElementById("txtSecreta");
    valorIngresado=componente.value
    longitud=valorIngresado.length
    if(longitud==5){
        for(let posicion=0;posicion<=valorIngresado.length-1;posicion++){
            letra=valorIngresado.charAt(posicion);
            letraMayuscula=esMayuscula(letra);
        }
        if(letraMayuscula==true){
            palabraSecreta=valorIngresado;
            
        }else{
            alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
        }
    }

}
mostrarLetra=function(letra,posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }
    if(posicion==1){
        mostrarTexto("div1",letra);
    }
    if(posicion==2){
        mostrarTexto("div2",letra);
    }
    if(posicion==3){
        mostrarTexto("div3",letra);
    }
    if(posicion==4){
        mostrarTexto("div4",letra);
    }
}
validar=function(letra){
    let letrasEncontradas=0
    let valorLetra;
    for(let posicion=0;posicion<=palabraSecreta.length-1; posicion++){
        valorLetra=palabraSecreta.charAt(posicion);
        if(valorLetra==letra){
            mostrarLetra(letra,posicion)
            letrasEncontradas=letrasEncontradas+1
        }
    }
}
ingresarLetra=function(){
    let componente;
    let valorIngresado;
    let letraMayuscula;
    componente=document.getElementById("txtLetra");
    valorIngresado=componente.value
    letraMayuscula=esMayuscula(valorIngresado);
    if(letraMayuscula==true){
        validar(valorIngresado);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }
}