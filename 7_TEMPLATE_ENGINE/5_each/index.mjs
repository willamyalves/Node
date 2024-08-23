import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/blog", (req, res) => {
  const post = {
    title: "Aprenda Node.Js",
    category: "Javascript",
    difficuty: "Média",
    comments: "Este post vai ajudá-lo a aprender javascript",
  };

  res.status(200).render("blog", { post });
});

app.get("/dashboard", (req, res) => {
  const items = ["A", "B", "C"];

  res.status(200).render("dashboard", { items });
});

app.get("/", (req, res) => {
  const user = {
    name: "Willamy",
    surName: "Alves",
    age: "24",
  };

  const auth = true;

  const approved = false;

  res.status(200).render("home", { user: user, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
