'use strict'



let cursitos = [
     {curso: 'JsPrincipiantes', tipo: 'Programacion'},
     {curso: ' DiseñoWeb', tipo: 'Programacion'},
     {curso : ' JSModerno',tipo: 'Programacion'},
     {curso: 'ComidaVegetariana', tipo: 'Culinario'},
     {curso: 'Galletas', tipo: 'Culinario'},
     {curso: 'ComidaNatural', tipo: 'Culinario'},
     {curso: 'ComidaMexicana', tipo: 'Culinario'},
     {curso : ' Guitarra',tipo: 'Musical'},
     {curso: 'Estudio Musical', tipo: 'Musical'},
     {curso: 'Huerto', tipo: 'Agricola'},
     {curso: 'Cosecha', tipo: 'Agricola'},
     {curso: 'Decoracion', tipo: 'Diseño'},
]

let tiposCursos = cursitos.map((tipoCurso) => {
  return tipoCurso.tipo
  
})
  
  console.log(tiposCursos);
 