// DOM elements 2

// giả sử bạn có 2 công việc:

// 1. lấy ra đối tượng boxElement
const boxElement = document.querySelector(".box");
console.log({ boxElement });

// 2. Lấy ra đối tượng li và phần tử p
const liElement = boxElement.querySelector("li");
const pElement = boxElement.querySelector("p");
console.log({ liElement, pElement });
