const btnElement = document.querySelector("button");

function work1() {
  console.log("work 1");
}

function work2() {
  console.log("work 2");
}

btnElement.addEventListener("click", work1);
btnElement.addEventListener("click", work2);

setTimeout(function () {
  // Huỷ sự kiện đối với công việc 1
  btnElement.removeEventListener("click", work1);
}, 3000);
