let queryString = location.search
let queryStringToObject = new URLSearchParams(queryString);
let id = queryStringToObject.get('id');
console.log("id personaje", id);
let url = `https://fakestoreapi.com/docs${id}`;

fetch(url)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let characterList = document.querySelector('.characterList');
    characterList.innerHTML += data.results[0].characterList.personajes;
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  })
