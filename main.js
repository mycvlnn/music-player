const PI = 3.141592653589793;
PI = 3.14; // This will give an error
PI = PI + 10; // This will also give an error

// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared

{
  let x = 2;
}
// x can NOT be used here
