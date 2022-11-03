"use strict"
let cursitos = class {
     constructor (titulo, precio, img, id, cantidad, total) {
         this.titulo=titulo;
         this.precio = precio;
         this. img = img;
         this.id = id; 
         this. cantidad = cantidad;
         this. total = total;
     }
 }
 

 
const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');



let articulosCarrito = []; 
let total =0;


cargarEventListeners();
function cargarEventListeners() {
     listaCursos.addEventListener('click', agregarCurso);
    
     carrito.addEventListener('click', eliminarCurso);
     
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

     
     

}

function agregarCurso(e) {
  e.preventDefault()
     if(e.target.classList.contains('agregar-carrito')){
      const curso = e.target.parentElement.parentElement;
     
                    
      leerDatosCurso(curso);
    
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

     

const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
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
         articulosCarrito=articulosCarrito.filter(curso=> curso.id !== cursoId);
          carritoHTML();
     }

}




function carritoHTML() {
     vaciarCarrito();
          articulosCarrito.forEach(curso  => {
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

function vaciarCarrito(){
     while (contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
          
     }
} 

function limpiarHTML () {
      while(contenedorCarrito.firstChild){
       contenedorCarrito.removeChild(contenedorCarrito.firstChild)
 
     }
} 

