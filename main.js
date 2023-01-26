// What's callback?

function myFn(param) {
  if (typeof param === "function") {
    param("Hello world");
  }
}

function myCallback(message) {
  console.log(message);
}

myFn(myCallback);
