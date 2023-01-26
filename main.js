// Empty elements of array

var arr = new Array(10); // sẽ tạo ra một mảng toàn phần tử rỗng có độ dài là 10

// Trong trường hợp dùng vòng lặp for để lặp qua:
const arrLength = arr.length;

for (var i = 0; i < arrLength; ++i) {
  console.log(arr[i]);
}

// vấn đề là nó sẽ bị lặp qua một mảng mà không có phần từ nào. Vì bản chất i nó cứ chạy khi vẫn thoả mãn điều kiện

// Hướng giải quết

arr.push(1, 2);

for (var index in arr) {
  console.log(index);
}
