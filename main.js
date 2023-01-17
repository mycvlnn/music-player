// Object prototype in Javascript

const User = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
};

// 1. Add thêm thuộc tính vào trong Object contructor
User.prototype.company = "Capichi";

const chris = new User("Lee", "Chris");
console.log(chris);
const nameCompany = chris.company;
// Truy xuất tên công ty
console.log(nameCompany);

// 2. Add thêm phương thức vào trong Object contructor

User.prototype.work = function () {
  return `${this.firstName} working...`;
};

console.log(chris.work()); // Lee working...

// 3. Xoá key object contructor

delete User.prototype.company;
