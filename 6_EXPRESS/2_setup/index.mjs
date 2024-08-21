import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});
app.listen(port, () => {
  console.log(`O servidor está funcionando na porta ${port}`);
});
