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

const emojiChars = [
  "😂",
  "😭",
  "🥺",
  "❤️",
  "🤣",
  "✨",
  "😍",
  "🙏",
  "🥰",
  "😊",
  "💕",
  "😘",
  "👍",
  "🍑",
  "🚗",
  "\n"
];

const lookupMap = {};
whitespaceChars.forEach((char, i) => (lookupMap[char] = i));

const emojiLookupMap = {};
emojiChars.forEach((char, i) => (emojiLookupMap[char] = i));

module.exports = { whitespaceChars, emojiChars, lookupMap, emojiLookupMap };
