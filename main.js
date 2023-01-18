// Học break and continue

// 1. break

// 1.1 Loop

for (var i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}

// 1.2 switch

const today = "Wed";

switch (today) {
  case "Wed":
    console.log("Today is Wednesday");
    break;
  case "Tue":
    console.log("Today is Tuesday");

  default:
    break;
}

// 2. continue: Lấy ra số lẻ

for (var i = 1; i < 10; i++) {
  if (i % 2 === 0) continue;

  console.log(i);
}
