// Làm việc với chuỗi
var myString = "Học JS tại F8 JS";

/**
 * 1. Length
 * 2. Find index
 * 3. Cut string
 * 4. Replace
 * 5. Convert to upper case
 * 6. Convert to lower case
 * 7. Trim
 * 8. Split
 * 9. Get a character by index
 */

// 1. Length
console.log(myString.length); // return 13

// 2. Find index
const index1 = myString.indexOf("JS");
console.log(index1); // return 4 bắt đầu từ vị trí 0

const index2 = myString.search("F8"); // cái này có thể search theo regex
console.log(index2);

const index3 = myString.lastIndexOf("JS"); // Index sẽ là giá trị tìm thấy cuối cùng
console.log(index3); // return 14

// 3. Cut string
const myString1 = "Xin chao";
const newString = myString1.slice(4); // return chao
const newString1 = myString1.substring(0, 3); // return xin

// 4. Replace
const myString2 = "Hello Capichi";
const newString2 = myString2.replace("Hello", "Xin chao"); // return Xin chao Capichi
const newString3 = myString2.replace(/i/g, "a"); // return Hello Capacha

// 5. Convert to upper case, lower case
const myString3 = "Hello guys";
console.log(myString3.toUpperCase()); // return HELLO GUYS
console.log(myString3.toLowerCase()); // return hello guys

// 6. trim
const myString4 = "     hello guys     ";
console.log(myString4.trim()); // return hello guys

// 7. Split

const myText = "Javascript,PHP,Ruby";
const myArr = myText.split(",");
console.log({ myArr });

// 8. Get a character by index
const myText1 = "Hello world Capichi";
console.log(myText1[0]); // return H
console.log(myText1.charAt(0)); // return 'H'
console.log(myText1.charAt(100)); // return ''
console.log(myText1[100]); // return undefined
