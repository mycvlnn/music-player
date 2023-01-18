// Vòng lặp do while. ứng dụng cho việc nạp thẻ 3 lần trong trường hợp server trả về  lỗi

const isSuccess = false;

const statusServer = true;

var i = 0;

do {
  i++;
  console.log(`Nap the lan: ${i}`);

  if (statusServer) {
    isSuccess = true;
    console.log("Nap the thanh cong");
  }

  if (!statusServer && i >= 3) {
    console.log("nap the that bai");
  }
} while (!isSuccess && i <= 3);
