const { whitespaceChars, emojiChars } = require("./constants");

const encodeByte = (emoji) => (byte) => {
  const chars = emoji ? emojiChars : whitespaceChars;

  const byteAsNumber = byte;

  const firstIndex = Math.floor(byteAsNumber / 16);
  const secondIndex = byteAsNumber % 16;

  const firstChar = chars[firstIndex];
  const secondChar = chars[secondIndex];

  return [firstChar, secondChar];
};

const wsonStringify = (jsObject, options = { emoji: false }) => {
  const stringToEncode = JSON.stringify(jsObject);
  const buffer = Buffer.from(stringToEncode);

  let encoded = [];
  buffer.forEach(buf => {
    const [first, second] = encodeByte(options.emoji)(buf);
    encoded.push(first);
    encoded.push(second);
  });
  encoded = encoded.join("");

  return encoded;
};

module.exports = wsonStringify;
