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
crearProducto=function(){
    let producto1={
        nombre: "Deja",
        precio:  1.55 ,
        stock: 3
    }
    console.log(producto1.nombre);
    let producto2={
        nombre:"Papel industrial",
        precio:1.50,
        stock: 5
    }
    console.log(producto2.nombre);
    if(producto1.stock<producto2.stock){
        console.log("Producto 2 tiene mayor stock")
    }
}