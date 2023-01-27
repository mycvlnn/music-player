// innerHTML and outerHTML

// 1. innerHTML: Chỉnh sửa phần tử con bên trong phần tử cha gọi phương thức này
const boxElement = document.querySelector(".box");
console.log({ boxElement });

// 1.1 set
boxElement.innerHTML = "<h1>Xin chao cac ban minh ten la Le Ngoai Ngu</h1>";

// 1.2 get
const valueBox = boxElement.innerHTML;
console.log({ valueBox });

// 2. outerHTML: chỉnh sửa chính phần tử gọi thuộc tính này

// 2.1 set
boxElement.outerHTML = "<div>Replace box</div>";

// 2.2 get
console.log(boxElement.outerHTML);
