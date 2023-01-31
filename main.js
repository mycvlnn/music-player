// classes basic

class Course {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const javascript = new Course(1, "Javascript");
const php = new Course(2, "PHP");

console.log({ javascript, php });
