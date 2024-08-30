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
        alert("PERSONA AGREGADA CORRECTAMENTE");
    }
}
