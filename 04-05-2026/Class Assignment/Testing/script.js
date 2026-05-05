const axios = require("axios");

function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0 || b === null) {
    throw new Error("Division by Zero");
  }
  return a / b;
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("ID is not matching");
    } else {
      resolve({ id: 1, name: "Prajwal" });
    }
  });
}

async function fetchFromAPI() {
  const res = await axios.get("/user");
  return res.data;
}

module.exports = { sum, divide, fetchUser, fetchFromAPI };
