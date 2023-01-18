// Học về đệ quy (recursion)
/**
 * 1. Xác định điểm dừng
 * 2. Logic handle => tạo ra điểm dừng
 */

// 1. Viết hàm tính giai thừa dựa vào vòng lặp
const factorial = (number) => {
  let total = 1;
  for (let i = number; i > 0; i--) {
    total *= i;
  }

  return total;
};

const x = factorial(6);
console.log(x);

// 2. Viết hàm tính giai thừa dựa vào đệ quy
const factorial1 = (number) => {
  if (number <= 1) return 1;

  return number * factorial1(number - 1);
};

const x2 = factorial1(6);
console.log(x2);
