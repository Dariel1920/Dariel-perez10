let Inventario = [];
let Entrada = [];
let Salida = [];

window.onload = cargarDesdelocalstorage;

function cargarArticulo() {
    let articulo = document.getElementById('articulo').value;
    let codigo = document.getElementById('codigo').value;
    let cantidad = parseInt(document.getElementById('entrada').value) - parseInt(document.getElementById('salida').value);
    
    if (articulo === '' || codigo === '' || isNaN(cantidad)) {
        alert("Debe llenar todos los campos correctamente");
        return;
    }
    
    let index = Inventario.findIndex(item => item.codigo === codigo);
    if (index !== -1) {
        Inventario[index].cantidad += cantidad;
    } else {
        Inventario.push({ articulo, codigo, cantidad });
    }
    
    guardarEnlocalstorage();
    mostrarInventario();
    limpiarFormulario();
}

function mostrarInventario() {
    let tabla = document.getElementById('Inventario');
    tabla.innerHTML = `
     <tr>
        <th>Artículo</th>
        <th>Código</th>
        <th>Cantidad</th>
     </tr>`;
    
    Inventario.forEach(item => {
        tabla.innerHTML += `
        <tr>
            <td>${item.articulo}</td>
            <td>${item.codigo}</td>
            <td>${item.cantidad}</td>
        </tr>`;
    });
}
function editarArticulo() {
    let codigo = document.getElementById('codigo').value;
    let articulo = document.getElementById('articulo').value;
    let cantidad = parseInt(document.getElementById('entrada').value);

    if (codigo === '' || articulo === '' || isNaN(cantidad)) {
        alert("Debe llenar todos los campos correctamente");
        return;
    }

    let index = Inventario.findIndex(item => item.codigo === codigo);
    if (index !== -1) {
        Inventario[index].articulo = articulo;
        Inventario[index].cantidad = cantidad;
        alert("Artículo actualizado correctamente");
    } else {
        alert("Artículo no encontrado en el inventario");
    }

    guardarEnlocalstorage();
    mostrarInventario();
    limpiarFormulario();
}
function eliminarArticulo() {
    let codigo = document.getElementById('codigo').value;

    if (codigo === '') {
        alert("Debe ingresar el código del artículo a eliminar");
        return;
    }

    let index = Inventario.findIndex(item => item.codigo === codigo);
    if (index !== -1) {
        Inventario.splice(index, 1);
        alert("Artículo eliminado correctamente");
    } else {
        alert("Artículo no encontrado en el inventario");
    }

    guardarEnlocalstorage();
    mostrarInventario();
    limpiarFormulario();
}


function registrarEntrada() {
    let articulo = document.getElementById('Articulos').value;
    let codigo = document.getElementById('Codigoos').value;
    let cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (articulo === '' || codigo === '' || isNaN(cantidad)) {
        alert("Debe llenar todos los campos");
        return;
    }
    
    let index = Inventario.findIndex(item => item.codigo === codigo);
    if (index !== -1) {
        Inventario[index].cantidad += cantidad;
    } else {
        Inventario.push({ articulo, codigo, cantidad });
    }
    
    Entrada.push({ articulo, codigo, cantidad });
    guardarEnlocalstorage();
    mostrarInventario();
    mostrarEntrada();
    limpiarFormulario();
}
function mostrarEntrada() {
    let tabla = document.getElementById('Entrada')
    tabla.innerHTML = `
     <tr>
    <th width="20%">Articulos</th>
    <th width="20%">codigoos</th>
    <th width="20%">cantidad</th>
    

  </tr>`;
    Entrada.forEach((Entrada) => {
        let fila = `
    <tr>
        <td>${Entrada.articulo}</td>
        <td>${Entrada.codigo}</td>
        <td>${Entrada.cantidad}</td>
       
    </tr>`;
        tabla.innerHTML += fila;
    });
}

function registrarSalida() {
    let articulo = document.getElementById('producto').value;
    let codigo = document.getElementById('numero').value;
    let cantidad = parseInt(document.getElementById('Cantidades').value);
    
    if (articulo === '' || codigo === '' || isNaN(cantidad)) {
        alert("Debe llenar todos los campos");
        return;
    }
    
    let index = Inventario.findIndex(item => item.codigo === codigo);
    if (index !== -1) {
        if (Inventario[index].cantidad >= cantidad) {
            Inventario[index].cantidad -= cantidad;
            Salida.push({ articulo, codigo, cantidad });
            Swal.fire({
                title: "Compra Exitosa",
                icon: "success",
                draggable: true
              });
        } else {
            alert("No hay suficiente stock para esta salida");
            return;
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El Articulo No Esta En El Inventario!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        return;
    }
   
   
    guardarEnlocalstorage();
    mostrarInventario();
    mostrarSalida();
    limpiarFormulario();
}
function mostrarSalida() {
    let tabla = document.getElementById('Salida')
    tabla.innerHTML = `
     <tr>
    <th width="20%">Productos</th>
    <th width="20%">numero</th>
    <th width="20%">cantidades</th>
    

  </tr>`;
    Salida.forEach((Salida) => {
        let fila = `
    <tr>
        <td>${Salida.articulo}</td>
        <td>${Salida.codigo}</td>
        <td>${Salida.cantidad}</td>
       
    </tr>`;
        tabla.innerHTML += fila;
    });
}

function guardarEnlocalstorage() {
    localStorage.setItem("Inventario", JSON.stringify(Inventario));
    localStorage.setItem("Entrada", JSON.stringify(Entrada));
    localStorage.setItem("Salida", JSON.stringify(Salida));
}

function cargarDesdelocalstorage() {
    let datosInventario = localStorage.getItem("Inventario");
    if (datosInventario) {
        Inventario = JSON.parse(datosInventario);
    }
    mostrarInventario();
}

function limpiarFormulario() {
    document.querySelectorAll("input").forEach(input => input.value = '');
}
