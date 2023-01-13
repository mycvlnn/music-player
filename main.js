/**
 * Các loại function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

// 1. Declaration function
function showMessage() {
  console.log("message");
}

// 2. Expression function
const myFunction = function () {
  console.log("My function");
};

setTimeout(function () {
  console.log("hello");
}, 100);

// Ngoài ra bạn có thể đặt tên cho expression function như thế này
setInterval(function countdown() {
  console.log("hello");
}, 100);
