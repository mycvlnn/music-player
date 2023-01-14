/**
 * CHUỖI TRONG JAVASCRIPT
 * 1. Tạo chuỗi
 *    - Các cách tạo chuỗi
 *    - Nên dùng cách nào? Lý do
 *    - Kiểm tra data type
 * 2. Một số case sử dụng backslash
 * 3. Xem độ dài chuỗi
 * 4. Template string ES6
 */

// c1:
const myName = "Le Ngoai Ngu";

// c2:
const myName2 = new String("Le Ngoai Ngu"); // Cách này thì chỉ để biết thôi

console.log(typeof myName); // return string

// 2. Backslash
const myName3 = "Le Ngoai Ngu la 'Sieu nhan'"; // Le Ngoai Ngu la 'Sieu nhan'
const myName4 = 'Le Ngoai Ngu la "Sieu nhan"'; // Le Ngoai Ngu la "Sieu nhan"

// 3. Xem độ dài chuỗi
const lengthName = myName3.length;

// 4. Template string
const age = 18;
const text = `Toi nam nay ${age} tuoi`; // Toi nam nay 18 tuoi
