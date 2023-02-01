// Viết function dùng để highlight các biến cần thiết bằng tagged template string

const highlight = ([firstValue, ...strings], ...values) => {
  console.log(strings, values);

  const htmls = values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [firstValue]
    )
    .join("");
  console.log(htmls);
};

const brand = "F8";
const course = "Javascript";

highlight`Học lập trình ${course} tại ${brand}`;
