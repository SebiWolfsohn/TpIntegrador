
let carrito = () => {
    let inCarrito = document.getElementById('containerCart');
    let productosCarrito = JSON.parse(localStorage.getItem('cart'))||[];
    containerCart.innerHTML = '';
    if (productosCarrito.length == 0) {
        productosCarrito.innerText = 'Su carrito esta vacio'
        erroremail.style.display = 'block';
    } else {
        for (let i = 0; i < productosCarrito.length; i++) {
            let producto = productosCarrito[i];
            
        }
    }
}


let agregar = [carrito];
let agregarJson=JSON.stringify(agregar);
console.log(agregar);
console.log(agregarJson);

localStorage.setItem('agregar', JSON.stringify(agregarJson))

let Cart = localStorage.getItem('carrito');
agregar.push(carrito);
console.log(carrito);

let carritoParseado = JSON.parse(carrito);
for (let i = 0; i < carritoParseado.length; i++) {
  console.log = (carritoParseado[i]);
}
