let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1234567891",nombre:"Elios",apellido:"Garcia",sueldo:1000.0}
]
let esNuevo=false
mostrarObcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
mostrarObcionRol=function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarObcionResumen=function(){
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleado=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table id=\"contenidoTabla\"><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>APELLIDO</th>"
    +"<th>SUELDO</th>"
    +"</tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"
        +"<td>"+elementoEmpleado.sueldo+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo=true
}

