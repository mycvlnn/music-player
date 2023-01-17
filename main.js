// Date object in Javascript

const date = new Date();

console.log(date);

// 1. Lấy ra ngày
const day = date.getDate();
console.log(day); // 17

// 2. Lấy ra tháng
const month = date.getMonth(); // 0 -11
console.log(month); // 0 : Vì đang là tháng 1

// 3. Lấy ra năm
const year = date.getFullYear();
console.log(year); // 2023

const display = `${day}-${month + 1}-${year}`; // 17-1-2023

// 4. Lấy ra giờ
const hours = date.getHours(); // return 16

// 5. Lấy ra phút
const minutes = date.getMinutes();

// 6. Lấy ra giây
const seconds = date.getSeconds();

const display1 = `${hours}:${minutes}:${seconds}`;
console.log(display1); // 16:17:13

// 7. Date.now()
const timestamp = Date.now();
console.log(timestamp); // 1673947080237

// 8. Date.getTime()
const timestamp1 = date.getTime();
console.log(timestamp1); // 1673947080237

// II. Set date
const date1 = new Date();

// 1. set ngày
date1.setDate(5);
// 2. set tháng
date1.setMonth(4);
// 3. set năm
date1.setFullYear(2005);

const display3 = `${date1.getDate()}/${
  date1.getMonth() + 1
}/${date1.getFullYear()}`;
console.log(display3); // 5/5/2005

// 4. set giờ
date1.setHours(5);

// 5. set phút
date1.setMinutes(5);

// 6. set giây
date1.setSeconds(5);

const display4 = `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
console.log(display4); // 5:5:5
