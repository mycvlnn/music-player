// Làm việc với mảng trong javascript

// 1. toString()
var courses = ["Javascript", "PHP", "Ruby"];

console.log(courses.toString()); // return Javascript,PHP,Ruby

// 2. join()
var courses1 = ["PHP", "SQL", "NodeJs"];
console.log(courses1.join("--"));

// 3. pop()
const languages = ["Js", "PHP", "Ruby"];
console.log(languages.pop()); // Ruby
console.log(languages.pop()); // PHP
console.log(languages.pop()); // Js
console.log(languages.pop()); // undefined

console.log(languages); // return []

// 4. push()
const languages1 = ["Js", "PHP", "Ruby"];
console.log(languages1.push("Java")); // return 4
console.log(languages1); // ["Js", "PHP", "Ruby", "Java"]
console.log(languages1.push("SQL", "HTML")); // return 6
console.log(languages1); // ["Js", "PHP", "Ruby", "Java",'SQL', 'HTML' ]

// 5. shift()
const languages2 = ["Js", "PHP", "Ruby"];
console.log(languages2.shift()); // Js
console.log(languages2); // [PHP, Ruby]

// 6. unshift()
const langs3 = ["Js", "PHP", "Dart"];
console.log(langs3.unshift("Hello")); // return 4
console.log(langs3); // return ["Hello", "Js", "PHP", "Dart"]

// 7. splice()

// 7.1 Trường hợp truyền 1 đối số
const database = ["PHP", "Ruby", "Rail"];
console.log(database.splice(1)); // ['Ruby', 'Rail']
console.log(database); // ['PHP']

// 7.2 Trường hợp add
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(1, 0, "Melon")); // return []
console.log(fruits); // ['Banana', 'Melon', 'Orange', 'Apple', 'Mango']

// 7.3 Trường hợp replace
const students = ["Chris", "Hoa", "Hoang", "Hieu"];
// replace "Hoa" -> "Thu"
console.log(students.splice(1, 1, "Thu")); // ['Hoa']
console.log(students); // ['Chris', 'Thu', 'Hoang', 'Hieu']

// 7.4 trường hợp xoá ở vị trí bất kì
const students2 = ["Chris", "Hoa", "Hoang", "Hieu"];
console.log(students2.splice(1, 2)); // ['Hoa', 'Hoang']
console.log(students2); // ['Chris', 'Hieu']

// 8. concat()
const students3 = ["Hello", "Chris"];
console.log(students3.concat("hello")); //  ['Hello', 'Chris', 'hello']
console.log(students3); // ["Hello", "Chris"] mảng cũ không thay đổi
console.log(students3.concat(["duy", "hoan"])); // ['Hello', 'Chris', 'duy', 'hoan']

// 9. slice()
const data1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(data1.slice(1)); // ['Orange', 'Lemon', 'Apple', 'Mango']

console.log(data1.slice(0, 2)); // ['Banana', 'Orange']

// 10. from()

console.log(Array.from("ABCDEFG")); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
