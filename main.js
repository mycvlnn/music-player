// Default parameter: trong trường hợp không truyền thì nó sẽ lấy làm giá trị mặc định

const logger = (message, type = "log") => {
  console[type](message);
};

logger("Hello");
