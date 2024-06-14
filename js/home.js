//let queryString = location.search
//let queryStringToObject = new URLSearchParams(queryString);
//let id = queryStringToObject.get('id');
//console.log("id container-items", id);

let url = 'https://fakestoreapi.com/products';
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let productos = document.querySelector('.container-items')
    let html = '';

    // Iterar sobre los datos recibidos
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      // Aca agregar el código para procesar cada elemento y agregarlo a celular
      html += `<article>
            <h3>${element.title}</h3>
            <img src="${element.image}" class="im">
            <a href="./categoria.html?categoria=${element.category}" class="nav">${element.category}</a>
            <p>${element.description}</p>
            <p class="Precio">$${element.price}</p>
            <div class="not">
              <a href="./producto.html?id=${element.id}" class="nav">Detalle de producto</a>
            </div>
        </article>`;
    }

    // Asignar el contenido generado a la sección HTML correspondiente
    productos.innerHTML = html;
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
