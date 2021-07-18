const fs = require("fs");

const wsonParse = require("./wsonParse");
const wsonStringify = require("./wsonStringify");

const readFilepath = "./src/data/example2.json";
const filepath = "./src/data/example2.wson";

const readJson = () => {
  const object = JSON.parse(fs.readFileSync(readFilepath).toString());
  return object;
}

const write = (object) => {
  const wson = wsonStringify(object);

  fs.writeFileSync(filepath, wson);
};

const read = () => {
  const wsonRead = fs.readFileSync(filepath).toString();

  const objectParsed = wsonParse(wsonRead);

  console.log(objectParsed);
};

const object = readJson();
write(object);
read();
