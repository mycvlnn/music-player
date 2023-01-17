// Object contructor in Javascript

const User = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

const tuan = new User("Hoang", "Tuan");
const cong = new User("Cong", "Tuan");
console.log(tuan);

// 1. Truy xuất thuộc tính của đối tượng đó
const fullName = tuan.getFullName(); // Hoang Tuan

// 2. bổ sung thuộc tính cho object đó
tuan.age = 18;

console.log(cong);
console.log(tuan); // Đối tượng tuan sẽ có thêm key age
