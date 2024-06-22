let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');
let url = `https://fakestoreapi.com/products/${id}`;

let carrito = () => {
    let productosCarrito = JSON.parse(localStorage.getItem('cart'))||[];
    containerItems.innerHTML = '';
    if (productosCarrito.length == 0) {
        productosCarrito.innerText = 'Su carrito esta vacio'
        erroremail.style.display = 'block';
    } else {
        for (let i = 0; i < productosCarrito.length; i++) {
            let productos = productosCarrito[i];
            datosproducto(productos)
            fetch(url)
             .then (function (response) {
                return response.json()
            })
             .then (function (data) {
                let producto = document.querySelector('.containeritems');
                let element = data;
                producto.innerHTML = ` <div class='producto'>
                <h2>${element.title}</h2>
                <p>Precio: $${element.price}</p>
                <img src='${element.image}' alt='${element.title}'
                </div>`;
                containerItems.innerHTML = data;
            })
             .catch (function (error) {
                console.log("Error al obtener el producto:" + error);
            });
        }
        data += `
        <button class='finalizarCompra'>Finalizar compra</button>`;
        containerItems.innerHTML = data;
        document.querySelector('.finalizarCompra').addEventListener('click', compraFinalizada,)
    }
}

let compraFinalizada = () => {
    localStorage.removeItem('cart');
    alert('Gracias por su compra!')
    window.location.href = 'index.html';
}

