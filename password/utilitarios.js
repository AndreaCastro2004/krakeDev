validarDigito=function(caracter){
    let cadena;
    let digito=false
    cadena=caracter.charCodeAt(0);
    if(cadena>=48 && cadena<=57){
        digito=true    
    }
    return digito;
}
encontrarMayuscula=function(caracter){
    let cadena;
    let mayuscula=false
    cadena=caracter.charCodeAt(0);
    if(cadena>=65 && cadena<=90){
        mayuscula=true
    }
    return mayuscula;
}
caracterEspecial=function(caracter){
    let cadena;
    let caracterEspecial=false
    cadena=caracter.charCodeAt(0);
    if(cadena==42 || cadena==45 || cadena ==95){
        caracterEspecial =true
    }
    return caracterEspecial;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje
}
