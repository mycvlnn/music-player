// classList property

// add
// contains
// remove
// toggle

const boxElement = document.querySelector(".box");
const classList = boxElement.classList;
console.log({ classList });

const valueClassList = classList.value;
console.log({ valueClassList }); // "box box-2 box-3"

// 1. add: Thêm một hoặc nhiều class vào trong element
classList.add("red", "blue");

// 2. contains: check một class có tồn tại trong element này hay không?

const checkClass = classList.contains("red");
console.log({ checkClass }); // return true

// 3. remove: Xoá một class ở bên trong một element. Nếu trong trường hợp không tồn tại class đó sẽ không có điều gì xảy ra cả

// setTimeout(function () {
//   classList.remove("blue");
// }, 3000); // sau 3s xoá class blue đi => sẽ hiển thị màu đỏ

// 4. toggle: Nếu trong trường hợp không có class trong element => add. Ngược lại sẽ remove

// 4.1 chúng ta thử làm hiệu ứng nhấp nhánh xanh đỏ nhé:

setInterval(() => {
  classList.toggle("blue");
}, 400);
