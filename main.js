/**
 * Câu lệnh điều kiện if else
 * 6 giá trị sau khi convert sang kiểu boolean sẽ là false:
 * 1. false
 * 2. 0
 * 3. '' || ""
 * 4. null
 * 5. NaN
 * 6. undefined
 */

const a = 1;
const b = 2;
const isSuccess = a > b; // false

if (isSuccess) {
  console.log("DIEU KIEN DUNG");
} else {
  console.log("DIEU KIEN SAI");
}
