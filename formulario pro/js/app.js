function enviarDatos(){
const nombre = document.getElementById('nombre').value
const apellido = document.getElementById('apellido').value
const Email = document.getElementById('email').value
const Asunto = document.getElementById('asunto').value
const Mensaje = document.getElementById('mensaje').value

if (!nombre || !apellido || !Email || !Asunto || !Mensaje) {
    alert("Por favor, complete todos los campos.");
    return; 
}

alert("Formulario enviado correctamente.");
let tabla = document.getElementById('formulario');
let fila=""
fila+=`
<tr><td>${nombre}</td><td>${apellido}</td><td>${Email}</td><td>${Asunto}</td>${Mensaje}</td></tr>`;
tabla.innerHTML+=fila;
}
    
    
    
    
    
    
    
    
    
    



