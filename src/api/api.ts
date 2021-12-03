const axios = require("axios");

export const registerUser = async (userName: string, email: string) => {
  const res = await axios.post("http://localhost:3000/users");
  console.log("111 response", res);
};
