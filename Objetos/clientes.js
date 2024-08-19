let clientes=[
    {cedula:"8126374",nombre:"Rosita",edad:24},
    {cedula:"4938348",nombre:"Pepe",edad:24},
    {cedula:"9959599",nombre:"Juan",edad:24}];
mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>EDAD</th>"
    +"</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado=null
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula ==cedula){
            clienteEncontrado=elementoCliente
            break;
        }
    }
    return clienteEncontrado;
}
agregarCliente=function(cliente){
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
        alert("CLIENTE AGREGADO")
        mostrarClientes();
    }else{
        alert("YA EXISTE UN CLIENTE CON ESA CEDULA "+cliente.cedula);
    }
}
crearClientes=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat ("txtEdad");
    let nuevoCliente={ };
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    if(errores(valorCedula,valorNombre,valorEdad) == false){
        agregarCliente(nuevoCliente);
    }
}
errores=function(valor1,valor2,valor3){
    let hayErrores=false
    if(valor1==""){
        mostrarTexto("lblErrorCedula","CAMPO OBLIGATORIO")
        hayErrores=true
    }else if(valor1.length<10 || valor1.length>10){
        mostrarTexto("lblErrorCedula","DEBE TENER MAXIMO 10 CARACTERES"); 
        hayErrores=true
    }
    if(valor2==""){
        mostrarTexto("lblErrorNombre","CAMPO OBLIGATORIO")
        hayErrores=true
    }else if(valor2.length>15){
        mostrarTexto("lblErrorNombre","DEBE TENER MAXIMO 15 CARACTERES"); 
        hayErrores=true
    }
    if(isNaN(valor3)){
        mostrarTexto("lblErrorEdad","CAMPO OBLIGATORIO")
        hayErrores=true
    }else if(valor3>100){
        mostrarTexto("lblErrorEdad","INGRES UNA EDAD VALIDA ENTRE 0 Y 100"); 
        hayErrores=true
    }
    return hayErrores;
}