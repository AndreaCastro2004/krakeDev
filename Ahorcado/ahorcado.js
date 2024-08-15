//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
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