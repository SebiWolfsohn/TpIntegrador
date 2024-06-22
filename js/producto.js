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
            <a class="btn" href="./cart.html">Añadir al carrito</a>
        </article>`;
    console.log(element);
  })
  document.getElementById("addCarrito").addEventListener("click", redirect);{
    function redirect(){ window.location.href = 'cart.html'; }
  }

  document.getproducto("addCarrito").addEventListener("click", function() {
   addToCart(element);
  //  console.log(element);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })





