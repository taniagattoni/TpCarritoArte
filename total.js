function calcularTotal(){
    let calcularTot;
    calcularTot = this.leerDatosCurso();
    for(let i = 0; i < articulosCarrito.length; i++){
        let element = Number(articulosCarrito[i].precio * articulosCarrito[i].cantidad);
        total = total + element;
        
    }
    
  
    subtotal = parseFloat(total).toFixed(2);

    document.getElementById('subtotal').innerHTML = "S/. " + subtotal;
    document.getElementById('total').value = "S/. " + total.toFixed(2);
}

