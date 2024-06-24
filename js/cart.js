let productosCarrito = JSON.parse(localStorage.getItem('cart')) || [];
let containerItems = document.querySelector('.container-items');
let finalizarCompra = document.querySelector('.finalizarCompra')
containerItems.innerHTML = '';

let compraFinalizada = () => {
    localStorage.removeItem('cart');
    alert('Gracias por su compra!')
    window.location.href = 'index.html';
}

if (productosCarrito.length == 0) {
    containerItems.innerText = 'Su carrito esta vacio'
    finalizarCompra.style.display = 'none';
} else {
    for (let i = 0; i < productosCarrito.length; i++) {
        let id = productosCarrito[i];
        let url = `https://fakestoreapi.com/products/${id}`;
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                let element = data;
                containerItems.innerHTML += ` <div class='producto'>
                    <h2>${element.title}</h2>
                    <p>Precio: $${element.price}</p>
                    <img src='${element.image}' alt='${element.title}'
                    </div>`;
            })
            .catch(function (error) {
                console.log("Error al obtener el producto:" + error);
            });
    }
    finalizarCompra.addEventListener('click', compraFinalizada)
}
