import express from "express";
import exphbs from "express-handlebars";

const app = express();
const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Read body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
