// Modules in javascript
import { TYPE_ERROR, TYPE_LOG, TYPE_WARN as WARN } from "./constants.js";

import logger from "./logger.js";

logger("hello", TYPE_ERROR);

// Optional chaining

const info = {
  name1: "chris",
  children: {
    nam2: "Chris child",
  },
};

console.log(info?.children1?.name); // sẽ không bị lỗi và return undefined

console.log(info?.["test"]?.name); // undefined. Không bị lỗi

// Câu lệnh trên tương đương
// if (info.test && info.test.name) {
//   console.log(info.test.name);
// }

const arr1 = [{ name: "chris", age: 1, id: 0 }];

const itemArr = arr1.find((item) => item.id === 10)?.age;

// Câu lệnh trên tương đương với câu lệnh:
if (itemArr) console.log(itemArr.age);

const objectInfo = {
  // getName(){
  // }
};

console.log(objectInfo.getName?.());
