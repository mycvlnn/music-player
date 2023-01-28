const h1Element = document.querySelector("h1");
h1Element.onclick = function (e) {
  console.log("click parent");
};

const btnElement = document.querySelector("button");
btnElement.onclick = function (e) {
  e.stopPropagation(); // ngăn chặn sự kiện nổi bọt
  console.log("click me");
};
