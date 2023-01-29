// fetch api

const productApi = "https://dummyjson.com/products/search?q=phone";
const productElement = document.getElementById("product-list");

fetch(productApi)
  .then(function (reponse) {
    if (reponse.ok) return reponse.json();
  })
  .then(function (data) {
    console.log(data);

    const products = data.products.map((product) => {
      return `<li>
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <img src=${product.thumbnail} />
      </li>`;
    });

    const html = products.join();

    productElement.innerHTML = html;
  })
  .catch(function (reason) {
    productElement.innerHTML = `<h1>${reason.message}</h1>`;
  });
