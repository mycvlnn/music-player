// HTML DOM

// 1. Element: ID, class, tag, Css Selector, HTML collection
// 2. Attribute
// 3. Text

// I. Element

// 1. ID

var headingNode = document.getElementById("heading");
console.log({ headingNode });

// 2. class
var headersNode = document.getElementsByClassName("header");
console.log({ headersNode });

// Chúng ta có thể lặp qua để thao tác với từng  HTML Object
for (let value of headersNode) {
  console.log({ value });
}

// 3. tag name
var tagNames = document.getElementsByTagName("h1");
console.log({ tagNames });

// 4. Css selector
// 4.1 query selector
const paragraph = document.querySelector(".box1 .paragraph");
console.log({ paragraph });

const firstItem = document.querySelector(".box .item:first-child");
console.log({ firstItem });

const lastItem = document.querySelector(".box .item:last-child");
console.log({ lastItem });

const secondElement = document.querySelector(".box3 .x:nth-child(2)");
console.log({ secondElement });

// 4.2 query selector all
const nodeListHeader = document.querySelectorAll(".box h2");
console.log({ nodeListHeader });

// 5. HTML object collections

const forms = document.forms["frm1"];
console.log({ forms });

const anchors = document.links;
console.log({ link2: anchors["link2"] });
