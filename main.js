// Math object

// Math.PI
const PI = Math.PI;
console.log(PI); // 3.141592653589793
// Math.round()
console.log(Math.round(PI)); // Làm tròn phần nguyên

// Math.abs()
const x = -10;
console.log(Math.abs(x)); // 10
// Math.ceil() : Làm tròn trên
console.log(Math.ceil(PI)); // 4

// Math.floor() : Làm tròn dưới
console.log(Math.floor(PI)); // 3

// Math.random()
console.log(Math.random()); // 0.14397898718014113

const gifts = ["Hoa", "Laptop", "Motobike"];

const random = Math.floor(Math.random() * 3);

const myGift = gifts[random];
console.log(myGift);

// ứng dụng cho việc tỉ lệ radom 1 -> 100%
const newRandom = Math.floor(Math.random() * 100);
if (newRandom < 10) {
  console.log("Ban nhan duoc 10 kim cuong");
}

// Math.min()
const numbers = [1, 2, 3, 4, 5];
const min = Math.min(...numbers);
console.log(min); // 1

// Math.max()
const max = Math.max(...numbers);
console.log(max); // 5
