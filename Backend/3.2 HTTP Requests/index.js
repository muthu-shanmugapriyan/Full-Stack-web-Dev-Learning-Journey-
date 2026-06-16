import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About my health</h1><p>Shannu Here</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: 9989255095</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
