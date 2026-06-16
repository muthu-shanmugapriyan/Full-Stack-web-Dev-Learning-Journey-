const { error } = require("console");
const fs = require("fs");

fs.writeFile("Message.txt", "Hello Siri", (err) => {
  if (err) throw err;
  console.log("The file is saved");
});

fs.readFile("./Message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
