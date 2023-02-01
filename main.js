// spread

// 1. array
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 1, 2, 3]

// 2. object

const course = {
  id: 1,
  name: "Java",
  coin: 1000,
};

const course2 = { ...course, id: 2 };
console.log(course2); // {id: 2, name: 'Java', coin: 1000}

// 3. function

const data = [1, 2, 3, 4];

const logger = (a, b, c, d) => {
  console.log(a, b, c, d);
};

logger(...data);
