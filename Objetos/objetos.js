probarAtributos=function(){
    //creamos un objeto con la variable let persona 
    let persona={
        //colocamos atributos 
        nombre: "Nanami",
        apellido:"Momozono",
        edad: 16,
        vivo:true
    }
    //para acceder a los atributos
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
    if (persona.vivo==false){
        console.log("NO ESTA VIVO")
    }else{
        console.log("SI ESTA VIVO")
    }
}