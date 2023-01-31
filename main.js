// Enhance object literals

/**
1. Định nghĩa key: value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến
 */

// 1.
const nameCourse = "Javascript";
const age = 20;

const js = {
  nameCourse,
  age,
  getName() {
    // 2.
    return this.nameCourse;
  },
};

// 3.
const fieldName = "name";
const fieldAge = "age";

const info = {
  [fieldAge]: 18,
  [fieldName]: "Javascript",
};
