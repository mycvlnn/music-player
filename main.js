// Phương thức thao tác với mảng

// forEach()	Calls a function for each array element

const courses = [
  {
    id: 1,
    name: "Js",
    coin: 0,
  },
  {
    id: 2,
    name: "PHP",
    coin: 10,
  },
  {
    id: 3,
    name: "Java",
    coin: 0,
  },
  {
    id: 4,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 5,
    name: "Dart",
    coin: 0,
  },
];

// 1.  forEach()	Calls a function for each array element
courses.forEach(function (item, index, arr) {
  console.log(item);
  console.log(index);
});

// 2. every() Checks if every element in an array pass a test
const isAllFree = courses.every(function (item, index, arr) {
  return item.coin === 0;
});

console.log(isAllFree); // false

// 3. some() Checks if any of the elements in an array pass a test
const hasFree = courses.some(function (item, index, arr) {
  return item.coin === 0;
});

console.log(hasFree); // return true

// 4. find() Returns the value of the first element in an array that pass a test

const course = courses.find((item, index, arr) => {
  return item.coin !== 0;
});

console.log(course);

// 5. findIndex() 	Returns the index of the first element in an array that pass a test
const index = courses.findIndex(function (item, index, arr) {
  return item.name === "Dart";
});

console.log(index);

// 6. filter
const listCourses = courses.filter(function (item, index, arr) {
  return item.coin === 0;
});
console.log(listCourses);

// 7. map
const listCourseUpdated = courses.map((item) => {
  return {
    ...item,
    description: `${item.name}_${item.coin}`,
  };
});

console.log(listCourseUpdated);

// 8. reduce: tính tổng tiền của tổng khoá học
const totalMoney = [].reduce((total, item) => {
  return total + item.coin;
}, 0);

console.log({ totalMoney }); // 10
