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
    agregarCliente(nuevoCliente);
}