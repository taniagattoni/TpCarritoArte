function totalProductos(){
    let total;
    total = this.leerDatosCurso();
    for(let i = 0; i < articulosCarrito.length; i++){
        let element = Number(articulosCarrito[i].precio * articulosCarrito[i].cantidad);
        total = total + element;
        
    }
    
  
    subtotal = parseFloat(total).toFixed(2);

    document.getElementById('total-productos').innerHTML = "S/. " + precio;
    document.getElementById('precio').value = "S/. " + total.toFixed(2);
}



function calcularTotal() {
    // Recorremos el array del carrito 
    return row.reduce((total, curso) => {
        // De cada elemento obtenemos su precio
        const Infocurso = leerDatosCurso.filter((total) => {
            return curso.id === parseInt(total);
        });
        // Los sumamos al total
        return total + infoCurso[0].precio;
    }, 0).toFixed(2);
}