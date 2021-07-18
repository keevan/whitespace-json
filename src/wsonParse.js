const GraphemeSplitter = require('grapheme-splitter');
const splitter = new GraphemeSplitter();

const { lookupMap, emojiLookupMap } = require("./constants");

const decode = (emoji) => (first, second) => {
  const map = emoji ? emojiLookupMap : lookupMap;
  return map[first] * 16 + map[second];
};

const wsonParse = (wsonString, options = { emoji: false }) => {
  const encoded = wsonString;
  const graphemes = splitter.splitGraphemes(encoded);

  const decoded = [];
  for (let i = 0; i < graphemes.length; i += 2) {
    const first = graphemes[i];
    const second = graphemes[i + 1];
    decoded.push(decode(options.emoji)(first, second));
  }

  const stringifiedJson = Buffer.from(decoded).toString();
  return JSON.parse(stringifiedJson);
};

module.exports = wsonParse;
