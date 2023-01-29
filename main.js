const isSuccess = true; // biến fake trạng thái gọi api thành công hoặc thất bại

function executor(resolve, reject) {
  // trong trường hợp thành công call resolve()
  // trong trường hợp thất bại call reject()

  // FAKE API
  if (isSuccess) {
    resolve([
      {
        id: 1,
        name: "Javascript",
        coin: 2000,
      },
    ]);
  }

  reject("Something wrong. Please try again");
}

const promise = new Promise(executor);

promise
  .then(function (data) {
    console.log({ data });

    // trong trường hợp hàm này lại trả về một promise
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    console.log("data new", data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
