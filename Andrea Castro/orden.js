let personas=[{nombre:"Marcos",edad:18},{nombre:"Roberto",edad:15},
    {nombre:"Kate",edad:25},{nombre:"Diana",edad:12},
    {nombre:"Benja",edad:5}];
agregarPersona=function(){
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
    let error1=false;
    let error2=false
    if (nombre.length<3){
        mostrarTexto("lblError1","Debe tener almenos 3 caracteres");
        error1=true;
    }
    if(edad<0 || edad>100){
        mostrarTexto("lblError2","Agregar un numero entre 0 y 100")
        error2=true;
    }else if(isNaN(edad)){
        mostrarTexto("lblError2","Debe ingresar un numero entero");
        error2=true;
    }
    if(error1 ==false && error2==false){
        let nuevaPersona={};
        nuevaPersona.nombre=nombre;
        nuevaPersona.edad=edad;
        personas.push(nuevaPersona);
        mostrarTexto("lblError1","");
        mostrarTexto("lblError2"," ")
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersona();
    }
}

//Parte 2
mostrarPersona=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table id=\"contenidoTabla\"><tr>"
    +"<th>EDAD</th>"
    +"<th>NOMBRE</th>"
    +"</tr>"
    let elementoPersona;
    for(let i=0;i<personas.length;i++){
        elementoPersona=personas[i]
        contenidoTabla+="<tr>"
        +"<td>"+elementoPersona.edad+"</td>"
        +"<td>"+elementoPersona.nombre+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
//parte 3
encontrarMayor=function(){
    let personaMayor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i]
        if(elementoPersona.edad>personaMayor.edad){
            personaMayor=elementoPersona;
        }
    }
    return personaMayor;
}
determinarMayor=function(){
    let mayor=encontrarMayor();
    mostrarTexto("personaMayor",mayor.nombre+" "+mayor.edad);
}
encontrarMenor=function(){
    let personaMenor=personas[0];
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        elementoPersona=personas[i]
        if(elementoPersona.edad<personaMenor.edad){
            personaMenor=elementoPersona;
        }
    }
    return personaMenor;
}
determinarMenor=function(){
    let menor=encontrarMenor();
    mostrarTexto("personaMenor",menor.nombre+" "+menor.edad);
}
