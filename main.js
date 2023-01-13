/**
 * Học về kiểu dữ liệu:
 */

// 1. string
var myName = "Chris Lee";

console.log(typeof myName); // string

// 2. number
var testScore = 10;

console.log(typeof testScore);

// 3. undefined
var a; // Khi định nghĩa một biến mà không gán giá trị -> sẽ là undefined ( chưa định nghĩa)
console.log(typeof a); // undefined

// 4. null
var bob = null;

console.log(typeof bob); // object

// 5. Symbol
var id1 = Symbol("id"); // unique
var id2 = Symbol("id"); // unique
const isEqual = id1 === id2;
console.log(isEqual); // return false
console.log(typeof id1);

// 6. object
var student = {
  id: 1,
  name: "Le Ngoai Ngu",
  phone: 012,
  eat: function () {
    // todo
  },
  sizes: ["1", "2", "3"],
};

console.log(typeof student);

// 7. array
var subjects = ["Math", "Literature", "Chemistry"]; // Toan, Van, Hoa
console.log(typeof subjects);
