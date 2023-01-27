// DOM attribute
/**
 * - có 2 cách để có thể set attribute và get attribute
    - Trực tiếp
    - Thông qua phương thức
 */

const boxElement = document.querySelector(".box");
console.log({ boxElement });

// 1. Trực tiếp
boxElement.id = "box";
const aElement = document.querySelector("a");
aElement.href = "https://fullstack.edu.vn";

// 1.1 get value của thuộc tính đó
const textLink = aElement.href;

// 2. Thông qua phương thức
aElement.setAttribute("target", "_blank");
const valueTarget = aElement.getAttribute("target");
console.log(valueTarget);
