import express from "express";
import exphbs from "express-handlebars";
import conn from "./db/conn.mjs";

const app = express();
const port = 3000;

// Connect handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Read body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect CSS
app.use(express.static("public"));

// Execute app
app.listen(port, () => {
  console.log("Conectado");
});
