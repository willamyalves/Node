import express from "express";

const app = express();

const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "nossa primeira API com Node!" });
});
app.post("/create/product", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(429).json({ message: "O campo 'nome' é obrigatório" });
  }

  res.json({ message: `O produto ${name} foi criado com o preço de ${price}` });
});

app.listen(port, () => {
  console.log("Ligado!");
});
