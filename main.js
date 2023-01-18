// For in

const student = {
  id: 1,
  name: "chris",
  phone: 1232131321321,
};

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}

const myCourses = ["Javascript", "PHP", "Ruby"];

for (let key in myCourses) {
  console.log(key);
  console.log(myCourses[key]);
}
