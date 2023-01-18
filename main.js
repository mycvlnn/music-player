// For of

// 1. Trường hợp đối với array

const myCourses = ["Js", "PHP", "Ruby"];

for (let value of myCourses) {
  console.log(value);
}

// 2. Trường hợp đối với object

const info = {
  id: 1,
  name: "Chris",
  phone: 19008198,
};

const keysInfo = Object.keys(info);

for (let key of keysInfo) {
  console.log(info[key]);
}
