// Học về hàm

function writeLog(message) {
  console.log(message); // undefined trong trường hợp không nhận đối số nào
}

writeLog();

// Tìm hiểu về đối tượng arguments

function say() {
  let myString = "";
  for (let param of arguments) {
    console.log(param);
    myString += `${param}-`;
  }
  console.log(myString); // 1-2-3-4-5-
}

say(1, 2, 3, 4, 5);

// Function return

function triple(x) {
  return 3 * x;
}

const result = triple(3); // 9
