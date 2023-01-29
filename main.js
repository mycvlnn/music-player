setTimeout(function () {
  console.log("work 1");
  setTimeout(function () {
    console.log("work 2");
    setTimeout(function () {
      console.log("work 3");
      setTimeout(function () {
        console.log("work 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
