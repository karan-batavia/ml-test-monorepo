const axios = require("axios");

function sendUser4(email, firstName, phoneNumber) {
  console.log("user", email);
  return axios.post("https://api.mixpanel.com/track", { email, firstName, phoneNumber });
}

module.exports = { sendUser4 };
