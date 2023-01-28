// DOM Event
// 1. Attribute events => done bên file html
// 2. Assign event using the HTML DOM

const boxElements = document.querySelectorAll(".box");

for (boxElement of boxElements) {
  boxElement.onclick = function (e) {
    console.log(e.target);
  };
}
