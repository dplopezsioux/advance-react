import express from "express";

const app = express();
const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

app.engine(".html", require("ejs").__express);

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
