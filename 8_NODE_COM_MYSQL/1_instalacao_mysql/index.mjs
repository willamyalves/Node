import express from "express";
import mysql from "mysql";
import exphbs from "express-handlebars";

const app = express();

const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "willdb",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  app.listen(port, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Conectado ao banco de dados!");
  });
});
