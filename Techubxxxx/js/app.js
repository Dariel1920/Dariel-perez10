let Tienda = [];
window.onload = cargarDesdelocalstorage;
function enviarArticulo() {


    let articulo = document.getElementById('articulo').value
    let codigo = document.getElementById('codigo').value
    let precio = document.getElementById('precio').value
    let marca = document.getElementById('Marca').value
    let modelo = document.getElementById('modelo').value
    let categoria = document.getElementById('categoria').value

    if (articulo === '' || codigo === '' || precio === '' || marca === '' || modelo === '' || categoria === '') {
        alert("debe llenar todos los campos")
        return
    }
   Tienda.push({ articulo, codigo, precio,marca,modelo,categoria})
    console.log(Tienda)
    document.getElementById('articulo').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('precio').value = ''
     document.getElementById('Marca').value = ''
      document.getElementById('modelo').value = ''
       document.getElementById('categoria').value = ''
    mostrarTienda()


}

function mostrarTienda() {
    let tabla = document.getElementById('Tienda')
    tabla.innerHTML = `
     <tr>
    <th width="20%">articulo</th>
    <th width="20%">codigo</th>
    <th width="20%">precio</th>
   <th width="20%">marca</th>
 <th width="20%">modelo</th>
 <th width="20%">categoria</th>
  </tr>`;
   Tienda.forEach((Tienda) => {
        let fila = `
    <tr>
        <td>${Tienda.articulo}</td>
        <td>${Tienda.codigo}</td>
        <td>${Tienda.precio}</td>
        <td>${Tienda.marca}</td>
        <td>${Tienda.modelo}</td>
        <td>${Tienda.categoria}</td>
        
    </tr>`;
        tabla.innerHTML += fila;
    });
}
function buscarArticulo() {
    let busquedaId = document.getElementById('articulo').value;
    if (busquedaId === '') {
        alert("Debe ingresar el articulo");
        return;
    }

    let encontrado = Tienda.find(est => est.articulo === busquedaId);

    if (encontrado) {
        document.getElementById('codigo').value = encontrado.codigo;
        document.getElementById('precio').value = encontrado.precio;
        document.getElementById('Marca').value = encontrado.marca;
        document.getElementById('modelo').value = encontrado.modelo;
        document.getElementById('categoria').value = encontrado.categoria;
    } else {
        alert("Articulo no encontrado");
    }
}
function editarArticulo() {

    let articulo = document.getElementById('articulo').value
    let codigo = document.getElementById('codigo').value
    let precio = document.getElementById('precio').value
    let marca = document.getElementById('Marca').value
    let modelo = document.getElementById('modelo').value
    let categoria = document.getElementById('categoria').value
    let indice = Tienda.findIndex(est => est.articulo === articulo);
    console.log(indice)
    if (indice !== -1) {
     
        Tienda[indice] = { articulo: articulo, codigo: codigo, precio: precio, marca: marca, modelo: modelo, categoria:categoria,};
        mostrarTienda();
        guardarEnlocalstorage();
        mostrarTienda();
        alert('El Articulo ha sido actualizado correctamente');
    } else {
        alert('Articulo  no encontrado');
    }
}
function eliminarArticulo(){
    let articulo = document.getElementById('articulo').value

if(articulo===''){
    alert('debe llenar el campo articulo');
    return;

}
let indice = Tienda.findIndex(est => est.articulo === articulo);
if (indice !== -1) {
    Tienda.splice(indice,1);
    document.getElementById('articulo').value = ''
    document.getElementById('codigo').value = ''
    document.getElementById('precio').value = ''
    document.getElementById('Marca').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('categoria').value = ''
    mostrarTienda()
    alert('el Articulo  ha sido Borrado');

}else{
    alert('Articulo  no encontrado')
}
}
function guardarEnlocalstorage(){
    localStorage.setItem("Tienda",JSON.stringify(Tienda));
    
    }
    function cargarDesdelocalstorage(){
    let datosGuardado = localStorage.getItem("Tienda");
    if (datosGuardado){
        Tienda = JSON.parse(datosGuardado);
        mostrarTienda();
    }
    
    
    
    
    }