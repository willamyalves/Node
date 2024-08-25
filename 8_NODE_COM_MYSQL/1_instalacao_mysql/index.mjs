import express from "express";
import mysql from "mysql";
import exphbs from "express-handlebars";

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

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "willdb",
});

app.get("/book/edit/:id", (req, res) => {
  const id = req.params.id;

  const getDataBook = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(getDataBook, (err, data) => {
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

  const updateBook = `UPDATE books SET title="${title}", pageqty = ${pageqty} WHERE id = ${id}`;

  conn.query(updateBook, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).redirect("/books");
  });
});

app.get("/book/:id", (req, res) => {
  const id = req.params.id;

  const getDataBook = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(getDataBook, (err, data) => {
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

  conn.query(getData, (err, data) => {
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

  conn.query(insertBook, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
});

app.post("/book/delete/:id", (req, res) => {
  const id = req.params.id;

  const deleteBook = `DELETE FROM books WHERE id = ${id}`;

  conn.query(deleteBook, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/books");
  });
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
