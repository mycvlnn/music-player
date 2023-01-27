// innerText, textContent

const headingElement = document.getElementById("heading");
console.log({ headingElement });

// 1. getter
const text1 = headingElement.innerText;
const text2 = headingElement.textContent;

console.log(text1); // như những gì chúng ta nhìn thấy trên trình duyệt
console.log(text2); // Như những gì trong code html chỉ cần nó năm trong thẻ mở và thẻ đóng thì sẽ được hiểu là text.

// 2. setter
headingElement.innerText = `Xin chào thế giới

Chúng ta là anh em một nhà
`; // trên trình duyệt sẽ hiển thị y hệt như thế này

headingElement.textContent = `Xin chào thế giới

Chúng ta là anh em một nhà
`; // trên trình duyệt sẽ bỏ qua các khoảng trắng
