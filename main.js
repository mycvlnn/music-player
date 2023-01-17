// Làm việc với object trong javascript

// 1. Tạo object

const newKey = "birth-day";

const student = {
  id: 1,
  name: "Chris",
  age: 18,
  "my-key": "this is my key",
  [newKey]: "20/10/2022", // Tạo key dựa vào một biến bên ngoài
  getName: function () {
    // Nếu trong trường hợp là function => ta sẽ gọi là method
    return this.name;
  },
};

// 2. Truy xuất value object

const idStudent = student.id; // 1
const keyStudent = "name";

// 2.1 Truy xuất name student dựa vào một biến bên ngoài
const nameStudent = student[keyStudent];
console.log(nameStudent); // Chris
const myBirthDay = student[newKey];
console.log(myBirthDay);

// 2. 3 Trong trường hợp truy cập vào một key mà không tồn tại trong object đó => return undefined
const hobby = student.hobby;
console.log(hobby); // undefined

// 3. Tạo thêm một thuộc tính cho object
student.phone = 09912321312;

console.log(student);

// 4. Xoá thuộc tính trong object
delete student.phone;

console.log(student);
