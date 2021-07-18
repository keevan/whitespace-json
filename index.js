const wsonParse = require('./src/wsonParse');
const wsonStringify = require('./src/wsonStringify');

module.exports = {
  parse: wsonParse,
  stringify: wsonStringify
};
