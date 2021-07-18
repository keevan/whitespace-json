const whitespaceChars = [
  "​",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "⠀",
  "\n",
  " ",
  "\t",
  "\r",
  "\v",
];

const lookupMap = {};
whitespaceChars.forEach((char, i) => (lookupMap[char] = i));

module.exports = { whitespaceChars, lookupMap };
