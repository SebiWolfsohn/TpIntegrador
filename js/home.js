//let queryString = location.search
//let queryStringToObject = new URLSearchParams(queryString);
//let id = queryStringToObject.get('id');
//console.log("id container-items", id);

  let url = 'https://fakestoreapi.com/products';
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let productos = document.querySelector('#productos')
      let html = '';
      
      // Iterar sobre los datos recibidos
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // Aquí puedes añadir el código para procesar cada elemento y agregarlo a celular
       html += `<article>
            <h3>${element.title}</h3>
            <img src="${element.image}" class="im">
            <h4>${element.category}</h4>
            <p>${element.description}</p>
            <p class="Precio">$${element.price}</p>
            <button>Añadir al carrito</button>
            <div class="not">
                <a href="./producto.html?id=${element.id}" class="nav">Detalle de producto</a>
            </div>
        </article>`;
      }
      
      // Asignar el contenido generado a la sección HTML correspondiente
      productos.innerHTML = html;
      console.log(data);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
