// Logic của phương thức reduce

Array.prototype.reduce2 = function (callback, initValue) {
  let result = initValue;
  let i = 0;

  if (initValue) {
    i = 1;
    result = this[0];
  }

  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
};

const courses = [
  {
    id: 1,
    name: "Java",
    cost: 10,
  },
  {
    id: 2,
    name: "Javascript",
    cost: 2,
  },
];

const handleTotalCoin = (total, item, index, arr) => {
  console.log(total, item, index, arr);
  return total + item.cost;
};

const result = courses.reduce2(handleTotalCoin, 0);

console.log({ result });
