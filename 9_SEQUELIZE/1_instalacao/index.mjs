import express from "express";
import exphbs from "express-handlebars";
import conn from "./db/conn.mjs";

import User from "./models/User.mjs";

const app = express();

const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(port, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Servidor ligado!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
