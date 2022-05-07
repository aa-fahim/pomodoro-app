const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = async (plainTextString) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPlainTextString = await bcrypt.hash(plainTextString, salt);
  return hashedPlainTextString;
};

const compareStrings = async (plainTextString, hashString) => {
  if (!plainTextString || !hashString) return false;
  const match = await bcrypt.compare(plainTextString, hashString);
  return match;
};

module.exports.hashString = hashString;
module.exports.compareStrings = compareStrings;
