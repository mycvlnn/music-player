// ứng dụng for...in, hasOwn để viết lại hàm forEarch2 có cơ chế giống forEarch

const courses = [
  {
    id: 1,
    name: "Java",
    price: 100,
  },
  {
    id: 2,
    name: "Javascript",
    price: 0,
  },
  {
    id: 3,
    name: "PHP",
    price: 0,
  },
  {
    id: 4,
    name: "Ruby",
    price: 0,
  },
];

Array.prototype.forEach2 = function (callback) {
  for (let key in this) {
    if (Object.hasOwn(this, key)) {
      callback(this[key], key, this);
    }
  }
};

courses.forEach2(function (item, index, arr) {
  console.log(item);
});
