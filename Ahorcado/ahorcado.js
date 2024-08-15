//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
palabraSecreta=""
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
    let palabraSecreta;
    componente=document.getElementById("txtSecreta");
    valorIngresado=componente.value
    longitud=valorIngresado.length
    if(longitud==5){
        for(let posicion=0;posicion<=valorIngresado.length-1;posicion++){
            letra=valorIngresado.charAt(posicion);
            letraMayuscula=esMayuscula(letra);
        }
        if(letraMayuscula==true){
            palabraSecreta=valorIngresado
            console.log(palabraSecreta)
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