// Arrow function

const sum = (a, b) => a + b;

console.log(1, 2); // 3

const logger = (data) => data;

const renderCourse = () => ({ id: 1, name: "Javascript" });

const info = {
  name: "Chris",
  getName: () => {
    return this; // con trỏ this này sẽ là đối tượng window.
  },
};

console.log(info.getName());

// Không thể định nghĩa Object constructor bằng arrow function
const Car = (name, color) => {
  this.name = name;
  this.color = color;
};

const car = new Car("Mercerdies", "#fff"); // error
