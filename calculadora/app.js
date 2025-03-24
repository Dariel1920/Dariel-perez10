let valor1
let operacion
function uno(){
valor=document.getElementById('pantalla').value
if (valor===""){
    valor=0
}
document.getElementById('pantalla').value=10*(parseInt(valor))+1

}

function dos(){
    valor=document.getElementById('pantalla').value
    if (valor===""){
        valor=0
    }
    document.getElementById('pantalla').value=10*(parseInt(valor))+2
    
    }
    function tres(){
        valor=document.getElementById('pantalla').value
        if (valor===""){
            valor=0
        }
        document.getElementById('pantalla').value=10*(parseInt(valor))+3
        
        }
        function cuatro(){
            valor=document.getElementById('pantalla').value
            if (valor===""){
                valor=0
            }
            document.getElementById('pantalla').value=10*(parseInt(valor))+4
            
            }
            function cinco(){
                valor=document.getElementById('pantalla').value
                if (valor===""){
                    valor=0
                }
                document.getElementById('pantalla').value=10*(parseInt(valor))+5
                
                }
                function seis(){
                    valor=document.getElementById('pantalla').value
                    if (valor===""){
                        valor=0
                    }
                    document.getElementById('pantalla').value=10*(parseInt(valor))+6
                    
                    }
                    function siete(){
                        valor=document.getElementById('pantalla').value
                        if (valor===""){
                            valor=0
                        }
                        document.getElementById('pantalla').value=10*(parseInt(valor))+7
                        
                        }
                        function ocho(){
                            valor=document.getElementById('pantalla').value
                            if (valor===""){
                                valor=0
                            }
                            document.getElementById('pantalla').value=10*(parseInt(valor))+8
                            
                            }
                            function nueve(){
                                valor=document.getElementById('pantalla').value
                                if (valor===""){
                                    valor=0
                                }
                                document.getElementById('pantalla').value=10*(parseInt(valor))+9
                                
                                }
                                function cero(){
                                    valor=document.getElementById('pantalla').value
                                    if (valor===""){
                                        valor=0
                                    }
                                    document.getElementById('pantalla').value=10*(parseInt(valor))+0
                                    
                                    }
                                    function suma(){
valor1=document.getElementById('pantalla').value
operacion="suma"
document.getElementById('pantalla').value=0

                                    }
                                    function resta(){
                                        valor1=document.getElementById('pantalla').value
                                        operacion="resta"
                                      document.getElementById('pantalla').value=0
                                   }    
                                   function multiplicacion(){
                                    valor1=document.getElementById('pantalla').value
                                    operacion="multiplicacion"
                                    document.getElementById('pantalla').value=0
                                   }
                                   function division(){
                                    valor1=document.getElementById('pantalla').value
                                    operacion="division"
                                    document.getElementById('pantalla').value=0
                                   }
                                   
     function igual(){
if (operacion==='suma'){
    valor2=document.getElementById('pantalla').value
    let total=parseInt(valor1)+parseInt(valor2)
    document.getElementById('pantalla').value=total
    valor1=document.getElementById('pantalla').value
    Swal.fire({
        title: "😎Usted Trabajo En Suma!!",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Guardado Correctamente!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No ah sido guardado", "", "info");
        }
      });
      
}


 if (operacion === 'resta') {
    valor2 = document.getElementById('pantalla').value;
    let total = parseInt(valor1) - parseInt(valor2);
    document.getElementById('pantalla').value = total;
    valor1 = document.getElementById('pantalla').value;
    Swal.fire({
        title: "Quieres Realizar otra Resta?",
        icon: "si",
        iconHtml: "No",
        confirmButtonText: "Si",
        cancelButtonText: "لNo",
        showCancelButton: true,
        showCloseButton: true
      });
}

if (operacion=== 'multiplicacion'){
    valor2=document.getElementById('pantalla').value;
    let total= parseInt(valor1) * parseInt(valor2);
    document.getElementById('pantalla').value= total;
    valor1=document.getElementById('pantalla').value;
    Swal.fire({
        title: "Bien Hecho!",
        text: "Usted trabajo con Multiplicaciones!!!.",
        imageUrl: "https://i.ytimg.com/vi/YFtEaVw5k1A/maxresdefault.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      
}

if (operacion=== 'division'){
    valor2=document.getElementById('pantalla').value;
    let total= parseInt(valor1) / parseInt(valor2);
    document.getElementById('pantalla').value= total;
    valor1=document.getElementById('pantalla').value;
    let timerInterval;
Swal.fire({
  title: "La division Se Cierrara!!!",
  html: "I will close in <b></b> milliseconds.",
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}





     }                                                   
                                                                                                                                                                                                                                                                        