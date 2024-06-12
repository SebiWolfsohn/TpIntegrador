let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');
let url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    let producto = document.querySelector('.container-items');
    producto.innerHTML = `<article>
            <h3>${data.title}</h3>
            <img src="${data.image}" class="im">
            <h4>${data.category}</h4>
            <p>${data.description}</p>
            <p class="Precio">$${data.price}</p>
            <button>Añadir al carrito</button>
        </article>`;
  console.log(data);
})
.catch(function(error) {
  console.log("Error: " + error);
})
