const { problem1 } = require("../fs-Problem1.cjs");

async  function success () {
  try {
    await problem1("./swetaaa", Math.round(10 * Math.random() + 1));
    console.log("Operation completed successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
};

success();