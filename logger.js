import { TYPE_LOG } from "./constants.js";

const logger = (message, type = TYPE_LOG) => {
  console[type](message);
};

export default logger;
