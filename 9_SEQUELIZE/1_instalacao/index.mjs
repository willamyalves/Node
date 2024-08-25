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

app.get("/user/edit/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.status(200).render("useredit", { user });
});

app.post("/user/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.get("/users/create", (req, res) => {
  res.status(200).render("adduser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  res.status(200).render("home", { users });
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
