// Hiểu rõ hơn về callback

// 1. Viết lại phương thức map2 có cơ chế hoạt động giống phương thức map của mảng

Array.prototype.map2 = function (callback) {
  const output = [];
  const arrLength = this.length;

  for (var i = 0; i < arrLength; i++) {
    const result = callback(this[i], i, this);
    output.push(result);
  }

  return output;
};

const courses = ["Js", "PHP", "Ruby"];

const htmls = courses.map2(function (item, index, arr) {
  console.log(item, index, arr);
  return `<h2>${item}</h2>`;
});

console.log(htmls);

// 2. Viết lại hàm filter2

Array.prototype.filter2 = function (callback) {
  const output = [];

  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    const isPass = callback(this[i], i, this);
    if (isPass) output.push(this[i]);
  }

  return output;
};

const coursesUpdate = courses.filter2(function (item, index, arr) {
  return item.includes("Js");
});
console.log({ coursesUpdate });

// 3. Viết lại hàm forEach

Array.prototype.forEach2 = function (callback) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    callback(this[i], i, this);
  }
};

courses.forEach2(function (item, index, arr) {
  console.log({ item, index, arr });
});

// 4. Viết lại hàm find

Array.prototype.find2 = function (callback) {
  let output;
  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    const isPass = callback(this[i], i, this);

    if (isPass) return this[i];
  }
  return output;
};

const course = courses.find2(function (item, index, arr) {
  return item.includes("Ruby");
});

console.log(course);

// 5. some
Array.prototype.some2 = function (callback) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    const isPass = callback(this[i], i, this);
    if (isPass) return true;
  }

  return false;
};

const isRuby = courses.some2(function (item, index, arr) {
  return item.includes("Ruby");
});

console.log({ isRuby }); // true

// 6. every

Array.prototype.every2 = function (callback) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    const isPass = callback(this[i], i, this);
    if (!isPass) return false;
  }

  return true;
};

const ages = [19, 20, 21, 22];

const isAdult = ages.every2(function (item, index, arr) {
  return item > 18;
});

console.log({ isAdult }); // true

// 7. findIndex

Array.prototype.findIndex = function (callback) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; ++i) {
    const isPass = callback(this[i], i, this);
    if (isPass) return i;
  }

  return -1;
};

const index = ages.findIndex(function (item, index, arr) {
  return item > 100;
});

console.log({ index }); // 0
