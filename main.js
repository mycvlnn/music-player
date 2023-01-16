// Làm việc với số trong javascript

/**
  1. Tạo giá trị  Number
    1. Các cách tạo
    2. Dùng cách nào? Tại sao?
    3. Kiểm tra data type
    4. Số NaN
    5. Số vô cực (Infinity)
  2. Làm việc với Number
    1. To string
    2. To Fixed
 */

// 1. Cách tạo
const myAge = 18;
const PI = 3.14;
const otherNumer = new Number(1); // Cách này thì không dùng trong thực tế

// 2. Dùng cách nào thì bạn tự nhìn bên trên rồi quết định nhé

// 3. Kiểm tra data type
console.log(typeof myAge); // return 'number'

// 4. Số NaN
const numberNaN1 = 0 / 0;
console.log(numberNaN1); // return NaN: Đây là số không hợp lệ
console.log(typeof numberNaN1); // return 'number'

const numberNaN2 = 10 / "hello";
console.log(numberNaN2); // NaN
console.log(typeof numberNaN2); // return 'number'

// 5. Số vô cực Infinity
const numInfinity = 10 / 0;
console.log(numInfinity); // Infinity
console.log(typeof numInfinity); // 'number'

// II. Làm việc với Number

const b = 2023.2023;
console.log(b.toString()); // return '2023.2023'
console.log(b.toFixed(2)); // return '2023.20'
