const data = '["javascript","PHP", "ruby"]'; // json

console.log(JSON.parse(data)); // return array

const data1 = '{"name": "chris","age": "18", "birthday": "02/03/2003"}';
console.log(JSON.parse(data1));

const info = {
  name: "Lee Chris",
  age: 18,
  address: "Hong son, My duc, Ha noi",
};

console.log(JSON.stringify(info));
console.log(JSON.parse('"string"'));
