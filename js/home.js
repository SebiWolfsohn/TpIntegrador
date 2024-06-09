let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');
//console.log("id container-items", id);

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))