let valueSearch = "";

const inputSearch = document.querySelector('input[type="text"]');
inputSearch.oninput = function (e) {
  valueSearch = e.target.value;
};

const btnSubmit = document.forms["search"];
console.log({ btnSubmit });
btnSubmit.onsubmit = function (e) {
  e.preventDefault();
  console.log("submitting...", valueSearch);
};

document.onkeyup = function (e) {
  switch (e.code) {
    case "Enter": {
      console.log(valueSearch);
    }
  }
};
