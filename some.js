const cursosGratuitos = [
   //{curso: 'JsPrincipiantes', precio: '2000'},
   {curso: ' DiseñoWeb', precio: '0'},
   //{curso : ' JSModerno',precio: '2500'},
   //{curso: 'ComidaVegetariana', precio: '1500'},
   //{curso: 'Galletas', precio: '1000'},
   {curso: 'ComidaNatural', precio: '0'},
   //{curso: 'ComidaMexicana', precio: '1400'},
   {curso : ' Guitarra',precio: '0'},
   //{curso: 'Estudio Musical', precio: '2000'},
   {curso: 'Huerto', precio: '0'},
   //{curso: 'Cosecha', precio: '1600'},
   //{curso: 'Decoracion', precio: '1000'},
];

const gratis = cursosGratuitos.some(cursoGratuito => cursoGratuito.precio > 0);
console.log(gratis)