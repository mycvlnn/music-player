/**
Arithmetic operators perform arithmetic on numbers (literals or variables).

- + : Cộng
- -  : trừ
- *  : Nhân
- /   : Chia
- ** : Luỹ thừa
- Chi lấy dư: %
- Tăng 1 giá trị số: ++
- Giảm 1 giá trị số: —
 */

var a = 1;
var b = 2;

var sum = a + b;
var subtract = a - b;
var multiple = a * b;
var exponentiation = a ** b;
var division = a / b;
var remainder = a % b;
a++;
b++;

console.log({ sum, subtract, multiple, exponentiation, division, remainder });
