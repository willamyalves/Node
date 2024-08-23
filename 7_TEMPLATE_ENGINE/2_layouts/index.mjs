import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Willamy",
    surName: "Alves",
    age: "24",
  };

  res.status(200).render("home", { user: user });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
