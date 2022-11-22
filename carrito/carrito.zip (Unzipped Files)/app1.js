"use strict"
let Cursitos = class {
     constructor (titulo, precio, img, id, cantidad,) {
         this.titulo=titulo;
         this.precio = precio;
         this. img = img;
         this.id = id; 
         this. cantidad = cantidad;
         
     }
 }
 

 
const carrito = document.querySelector('#carrito'); 

const listaCursos = document.querySelector('#lista-cursos'); 

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');




let articulosCarrito = []; 



cargarEventListeners(); 
function cargarEventListeners() {
     listaCursos.addEventListener('click', agregarCurso);
    
     carrito.addEventListener('click', eliminarCurso);

     ingresar.addEventListener('click', validarForm );
     
     vaciarCarritoBtn.addEventListener('click', () => {
          articulosCarrito = [];
          limpiarHTML();
     });

    

     
     

}

function agregarCurso(e) {
  e.preventDefault() 
     if(e.target.classList.contains('agregar-carrito')){ 
      const curso = e.target.parentElement.parentElement; 
     
                    
      leerDatosCurso(curso);
      pintarTotal();
     }

}

function leerDatosCurso(curso) {
   
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
        
          precio: curso.querySelector('.precio span').textContent, 
          tipo: curso.querySelector('.tipo span'). textContent, 
          id: curso.querySelector('a').getAttribute('data-id'),
        
          cantidad: 1
     }

     

const existe = articulosCarrito.some( curso => curso.id === infoCurso.id); // Inmutable
if (existe) {

     const cursos= articulosCarrito.map(curso=> {
          if  (curso.id === infoCurso.id){
               curso.cantidad++;
               return curso;
           } else{
               return curso;
          }
     })
     articulosCarrito= [...cursos];
}else{
     articulosCarrito= [...articulosCarrito, infoCurso];
}


carritoHTML();

}




function eliminarCurso(e){
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso')){
        const cursoId=e.target.getAttribute('data-id')
         articulosCarrito=articulosCarrito.filter(curso=> curso.id !== cursoId); //Todas la condiciones cumplidas
          carritoHTML();
     }

}




function carritoHTML() {
     limpiarHTML ();
          articulosCarrito.forEach(curso  => { //Callback 1
               const row = document.createElement('tr');
 
               row.innerHTML =`     
               
               <td>
               <img src ="${curso.imagen}" width =100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad}</td>
               <td>${curso.tipo}</td>
               <td>
               <a href="#" class="borrar-curso"data-id="${curso.id}">X</a>
               </td>

               `;
            contenedorCarrito.appendChild(row);

           
               
               
               

          });
}



function limpiarHTML () {
      while(contenedorCarrito.firstChild){
       contenedorCarrito.removeChild(contenedorCarrito.firstChild)
 
     }
} 
function precioXnumero (pesos) {
     let costo = pesos.replace('$','')
    costo = parseFloat(costo)
     return costo
}
  function totalPagar (){
     let total = 0
     articulosCarrito.forEach(curso => {
          total = total + precioXnumero(curso.precio) * curso.cantidad
     })
     return total
}

  function pintarTotal () {
    let total = totalPagar()
     total = total

     document.querySelector('#pagar').innerHTML =`Total:$${total}`
}


  function validarForm(e) { 
     e.preventDefault();
     var usuario = document.getElementById('usuario').value;
     if(usuario.length == 0) {
          alert('Falta completar el campo de usuario.');
          return false;
     }
         var contraseña = document.getElementById('contraseña').value;
          if(contraseña.length == 0) {
          alert('Falta completar contraseña');
          return false;
      }else{
        var saludar = alert(' ¡Bienvenido/a! ¡Te estabamos esperando!');
         console.log(saludar);
   
     }
 
} 


function registroU(){
 var registro = document.getElementById('registro'). value;
  let name = prompt('Ingrese su nombre y apellido');
 let mail =prompt('Ingrese su correo electrónico');
 prompt('Ingrese una contraseña');
 prompt('Confirme la contraseña')
    alert(`¡Bienvenido/a ${name}, gracias por registrarte! Recibiras las últimas novedades en ${mail}`)
  console.log(registro);
}
   
 
  function comprarU() {
var comprar = document.getElementById('comprar'). value;
alert('Primero debe iniciar sesión o registarse.');
console.log(comprar);
  }

function pagarU () {
     var pagar = document.getElementById('pagar'). value;
alert(`¡Gracias por su compra! Se ha enviado a su email el comprobante de pago.`);
console.log(pagar);

}