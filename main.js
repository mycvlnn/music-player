// Làm việc với số

// 1 triệu
var million = 1000000; //
// Ngoài cách bên trên ta có thể khai báo bằng chữ e
var million2 = 1e6; // tương tự 1000000
var billion = 1e9; // tương tự 1 tỉ (1000000000) // viết kiểu này sẽ không bị nhầm lẫn thiếu số

// Đối tượng number. Phương thức sau thường được sử dụng

// 1. Kiểm tra số hữu hạn là số có giá trị khác Infinity, NaN
console.log(Number.isFinite(2 / 0)); // false vì value là Infinity
console.log(Number.isFinite(0 / 0)); // false vì value là NaN
console.log(Number.isFinite(20 / 5)); // true
console.log(Number.isFinite(100000000123802138)); // true
console.log(Number.isFinite(-1)); // return true

// 2. Number.isInteger() xác định giá trị đã cho có phải là số nguyên hay không. Trả về boolean
console.log(Number.isInteger(9999999999)); // return true
console.log(Number.isInteger(-1)); // return true
console.log(Number.isInteger(10.2)); // false
console.log(Number.isInteger(Math.PI)); // false

// 3. Number.parseFloat() : Chuyển đổi chuỗi đã cho thành một số dấu phẩy động. Tham số là string. Phương thức này khá hay phục vụ cho việc convert giá trị string thành number
console.log(Number.parseFloat("10")); // 10
console.log(Number.parseFloat("10.00")); // 10
console.log(Number.parseFloat("238,21")); // 238
console.log(Number.parseFloat("237.22")); // 237.22
console.log(Number.parseFloat("34 56 78")); // 34
console.log(Number.parseFloat(" 37 ")); // 37
console.log(Number.parseFloat("18 is my age")); // return 18

// 4. Number.parseInt(): Chuyển đổi một chuỗi đã cho thành một số nguyên. Trong trường hợp cố tình truyền số vào nó sẽ tự động convert sang string giúp ta
Number.parseInt("10"); // 10
Number.parseInt("10.00"); // 10
Number.parseInt("238,21"); // 238
Number.parseInt("237.22"); // 237
Number.parseInt("34 56 78"); // 34
Number.parseInt(" 37 "); // 37
Number.parseInt("18 is my age"); // 18

// 5. toFixed() Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân. Tham số chỉ nhận giá trị dương
var myNumber = 1234.56789;
console.log(myNumber.toFixed()); // '1235' được làm tròn = Math.round(myNumber)
console.log(myNumber.toFixed(2)); // '1234.56'
console.log(myNumber.toFixed(NaN)); // '1235' : Đồng nghĩa với việc không truyền vì nó là falsy
console.log(myNumber.toFixed(6)); // '1234.567890' : Bổ sung thêm số 0 cho đủ 6

// 6. toString() Chuyển đổi và trả về số đã cho dưới dạng chuỗi
console.log((1).toString()); // '1'
console.log((-1).toString()); // '-1'
console.log((0).toString()); // '0'
console.log(NaN.toString()); // 'NaN'
