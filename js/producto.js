let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');
let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let producto = document.querySelector('.container-items');
    let element = data
    producto.innerHTML = `<article>
            <h3>${element.title}</h3>
            <img src="${element.image}" class="im">
            <a href="./categoria.html?categoria=${element.category}" class="nav">${element.category}</a>
            <p>${element.description}</p>
            <p class="Precio">$${element.price}</p>
            <button id="addCarrito">Añadir al carrito</button>
        </article>`;
    console.log(element);
  })

  document.getproducto("addCarrito").addEventListener("click", function() {
    addToCart(element);
    console.log(element);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })


// NO SE SI ESTA BIEN ESTO, REVISTAR. es lo de agregar al carrito el producto
let agregar = [addCarrito];
let agregarJson=JSON.stringify(agregar);
console.log(agregar);
console.log(agregarJson);

localStorage.setItem('agregar', JSON.stringify(agregarJson))

let carrito = localStorage.getItem('carrito');
agregar.push(carrito);
console.log(carrito);

let carritoParseado = JSON.parse(carrito);
for (let i = 0; i < carritoParseado.length; i++) {
  console.log = (carritoParseado[i]);
}


