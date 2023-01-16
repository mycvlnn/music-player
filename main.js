// Làm việc với mảng trong javascript

/**
 * 1. Tạo mảng
    1. cách tạo mảng
    2. Sử dụng cách nào? Tại sao?
    3. Kiểm tra data type
2. Truy xuất mảng
    1. Độ dài mảng
    2. Lấy phần tử theo index
 */

// 1.1 Các cách tạo mảng
// c1
var arr = [1, "hi", null, undefined, NaN, function () {}, {}];
// c2: không nên dùng
var arr1 = new Array(1, "hi", null, undefined, NaN, function () {}, {});

// 1.3 kiểm tra xem có phải là mảng hay không
console.log(Array.isArray([1, 2, 3])); // true
console.log({}); // return false

// 1.3 lấy ra độ dài của mảng
console.log(arr.length);

// 1.4 Lấy ra phần tử theo index
console.log(arr[0]); // return 1
