let data = {
  name: "",
  gender: false,
  yearOfBirth: null,
};

const inputName = document.querySelector('input[type="text"]');
inputName.oninput = function (e) {
  data.name = e.target.value;
};

const inputGender = document.querySelector('input[type="checkbox"]');
inputGender.onchange = function (e) {
  data.gender = e.target.checked;
};

const yearOfBirth = document.querySelector("select");
yearOfBirth.onchange = function (e) {
  data.yearOfBirth = e.target.value;
};

const btnSubmit = document.querySelector("button");
btnSubmit.onclick = function () {
  alert("submit");
  // Dữ liệu gửi lên phía server.
  console.log({ data });
};

document.onkeyup = function (e) {
  switch (e.code) {
    case "Enter": {
      alert("submit");
      // Dữ liệu gửi lên phía server.
      console.log({ data });
    }
  }
};
