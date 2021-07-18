const { lookupMap } = require("./constants");

const decodeWhitespace = (first, second) => {
  return lookupMap[first] * 16 + lookupMap[second];
};

const wsonParse = (wsonString) => {
  const encoded = wsonString;

  const decoded = [];
  for (let i = 0; i < encoded.length; i += 2) {
    const first = encoded[i];
    const second = encoded[i + 1];
    decoded.push(decodeWhitespace(first, second));
  }

  const stringifiedJson = Buffer.from(decoded).toString();
  return JSON.parse(stringifiedJson);
};

module.exports = wsonParse;
