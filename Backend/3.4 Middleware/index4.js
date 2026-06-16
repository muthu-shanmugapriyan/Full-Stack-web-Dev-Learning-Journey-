import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var fullName = "";

app.use(bodyParser.urlencoded({ extended: true }));
function fullNameGenerator(req, res, next) {
  console.log(req.body);
  fullName = req.body["fn"] + " " + req.body["ln"];
  console.log(fullName);
  next();
}

app.use(fullNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Here is Your Full Name :</h1> <h2>${fullName} </h2>`);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
