const { whitespaceChars } = require("./constants");

const encodeByteAsWhitespace = (byte) => {
  const byteAsNumber = byte;
  const firstIndex = Math.floor(byteAsNumber / 16);
  const secondIndex = byteAsNumber % 16;
  const firstChar = whitespaceChars[firstIndex];
  const secondChar = whitespaceChars[secondIndex];
  return [firstChar, secondChar];
};

const wsonStringify = (jsObject) => {
  const stringToEncode = JSON.stringify(jsObject);
  const buffer = Buffer.from(stringToEncode);

  let encoded = [];
  buffer.forEach(buf => {
    const [first, second] = encodeByteAsWhitespace(buf);
    encoded.push(first);
    encoded.push(second);
  });
  encoded = encoded.join("");

  return encoded;
};

module.exports = wsonStringify;
