import express from "express";
import exphbs from "express-handlebars";
import pool from "./db/conn.mjs";

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

app.get("/book/edit/:id", (req, res) => {
  const id = req.params.id;

  const getDataBook = `SELECT * FROM books WHERE ?? = ?`;

  const data = ["id", id];

  pool.query(getDataBook, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dataBook = data[0];

    res.status(200).render("editbook", { dataBook });
  });
});

app.post("/book/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const updateBook = `UPDATE books SET ??=?, ?? = ? WHERE ?? = ?`;

  const data = ["title", title, "pageqty", pageqty, "id", id];

  pool.query(updateBook, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).redirect("/books");
  });
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;

  const getDataBook = `SELECT * FROM books WHERE ?? = ?`;

  const data = ["id", id];

  pool.query(getDataBook, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dataBook = data[0];

    res.status(200).render("book", { dataBook });
  });
});

app.get("/books", (req, res) => {
  const getData = "SELECT * FROM books";

  pool.query(getData, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const book = data;

    res.status(200).render("books", { book });
  });
});

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageQty = req.body.pageqty;

  const insertBook = `INSERT INTO books (title, pageqty) VALUES ("${title}", "${pageQty}")`;

  const data = ["title", "pageqty", title, pageQty];

  pool.query(insertBook, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.post("/book/delete/:id", (req, res) => {
  const id = req.params.id;

  const deleteBook = `DELETE FROM books WHERE ?? = ?`;

  const data = ["id", id];

  pool.query(deleteBook, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Conectado ao banco de dados!");
});
