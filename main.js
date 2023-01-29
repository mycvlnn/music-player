// Promise static method

// 1. Promise.resolve
const promise = Promise.resolve([1, 2, 3]);

promise.then(function (data) {
  console.log("data", data); // [1, 2, 3]
});

// 2. Promise.reject
const promise2 = Promise.reject("Something went wrong!");
promise2.catch((error) => console.log(error)); // Something went wrong!

// 3. Promise.all

const newPromise1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([1, 2, 3]);
  }, 1000);
});

const newPromise2 = new Promise((resolve) => {
  setTimeout(function () {
    resolve([4, 5, 6]);
  }, 2000);
});

const promiseAll = Promise.all([newPromise1, newPromise2]);

promiseAll
  .then(function ([data1, data2]) {
    const numbers = data1.concat(data2);
    console.log({ numbers });
  })
  .catch((error) => {
    console.log(error);
  });
