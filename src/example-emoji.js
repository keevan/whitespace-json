const fs = require("fs");

const wsonParse = require("./wsonParse");
const wsonStringify = require("./wsonStringify");

const filepath = "./src/data/example.wson";

const write = () => {
  const object = {
    key: "value",
    another: "another value",
    array: ["here's", "one"],
  };

  const wson = wsonStringify(object, { emoji: true });

  fs.writeFileSync(filepath, wson);
};

const read = () => {
  const wsonRead = fs.readFileSync(filepath).toString();

  const objectParsed = wsonParse(wsonRead, { emoji: true });

  console.log(objectParsed);
};

write();
read();
