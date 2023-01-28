const boxElement = document.getElementById("box");
boxElement.onmousedown = function (e) {
  e.preventDefault();
  const item = e.target;
  if (item.dataset.course) {
    console.log(item.dataset.course);
  }
  console.log({ data: e.target });
};
