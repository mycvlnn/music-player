// Học về toán tử destructuring, rest

// 1.  Array

const numbers = [1, 2, 3];

const [a, b, c, d = 3] = numbers; // trong trường hợp không có phần tử d => sẽ lấy giá trị default
console.log({ a, b, c, d });

const [x, ...rest] = numbers; // rest là những phần tử còn lại của mảng
console.log(rest); // [2, 3]

const [a1, a2, a3, ...rest1] = numbers;
console.log(rest1); // []

// 2. Object

// 2.1 destructuring
const course = {
  name: "Java",
  id: 1,
  desc: "Good",
  children: {
    name: "Children",
  },
};

const { id, desc, ...rest3 } = course;

// 3. method

const logger = (...rest) => {
  console.log(rest); // [1, 2, 3, 4]
};

logger(1, 2, 3, 4);

const logger2 = ({ id, ...rest }) => {
  console.log(rest);
  console.log(id);
};

logger2({ id: 1, description: "Hihih" });
