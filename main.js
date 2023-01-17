// Sắp xếp mảng trong javascript

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort(); // ['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits); // ascending order: ['Apple', 'Banana', 'Mango', 'Orange']

const numbers = [1, 20, 4, 3, 21];
console.log(numbers.sort()); // [1, 20, 21, 3, 4]

// 1. Sắp xếp theo thứ tự tăng dần
const arrAscending = numbers.sort((a, b) => {
  return a - b;
});

console.log(arrAscending); // [1, 3, 4, 20, 21]

// 2. Sắp xếp theo thứ tự giảm đần
const arrDescending = numbers.sort((a, b) => b - a);
console.log(arrDescending);

// 3. Sorting array of objects

const students = [
  {
    id: 1,
    name: "Hoang",
    score: 10,
  },
  {
    id: 2,
    name: "Khiem",
    score: 9,
  },
  {
    id: 3,
    name: "Khanh",
    score: 4,
  },
  {
    id: 4,
    name: "Thuyen",
    score: -1,
  },
  {
    id: 5,
    name: "Mai",
    score: 0,
  },
];

// 3.1 Sắp xếp theo id
const studentsSorted = students.sort((itemA, itemB) => {
  return itemA.id - itemB.id;
});

console.log(studentsSorted);

// 3.2 Sắp xếp score
const studentsSorted1 = students.sort((itemA, itemB) => {
  return itemA.score - itemB.score;
});
console.log(studentsSorted1);
