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
    // todo
  })
  .catch(function (error) {
    console.log(error);
    // todo
  })
  .finally(function () {
    // todo
    console.log("finally");
  });
