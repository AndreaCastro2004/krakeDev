validarPlaca=function(){
    let componente;
    let valorIngresado;
    let erroresEstructura;
    let provincia;
    componente=document.getElementById("txtPlaca");
    valorIngresado=componente.value;
    erroresEstructura=validarEstructura(valorIngresado);
    if (erroresEstructura == null){
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(valorIngresado);
        if ( provincia != null){
            mostrarTexto("lblProvincia",provincia)
        }else{
            mostrarTexto("lblProvincia", "INCORRECTA")
        }
    }else{
        mostrarTexto("lblValidacion","ESTRUCTURA INCORRECTA");
        mostrarTexto("lblErroresValidacion",erroresEstructura)
    }
    
}
obtenerProvincia=function(placa){
    let letra;
    let provincia=null
    letra=placa.charAt(0)
    if(letra == "A"){
        provincia=" Azuay"
    }
    if(letra == "B"){
        provincia="Bolivar"
    }
    if(letra == "U"){
        provincia="Canar"
    }
    if(letra == "C"){
        provincia=" Carchi"
    }
    if(letra == "X"){
        provincia=" Cotopaxi"
    }
    if(letra == "H"){
        provincia=" Chimborazo"
    }
    if(letra == "O"){
        provincia=" El Oro"
    }
    if(letra == "E"){
        provincia=" Esmeraldas"
    }
    if(letra == "W"){
        provincia="Galapagos"
    }
    if(letra == "G"){
        provincia=" Guayas"
    }
    if(letra == "I"){
        provincia=" Imbabura"
    }
    if(letra == "L"){
        provincia=" Loja"
    }
    if(letra == "R"){
        provincia="Los Rios"
    }
    if(letra == "M"){
        provincia="Manabi"
    }
    if(letra == "V"){
        provincia="  Santiago"
    }
    if(letra == "N"){
        provincia=" Napo"
    }
    if(letra == "S"){
        provincia=" Pastaza"
    }
    if(letra == "P"){
        provincia="  Pichincha"
    }
    if(letra == "K"){
        provincia="Sucumbios"
    }
    if(letra == "Q"){
        provincia=" Orellana"
    }
    if(letra == "T"){
        provincia=" Tungurahua"
    }
    if(letra == "Z"){
        provincia=" Zamora Chinchipe"
    }
    if(letra == "Y"){
        provincia=" Santa Elena	"
    }
    if(provincia !=null ){
        return provincia
    }else{
        provincia=null
        return provincia;
    }

}