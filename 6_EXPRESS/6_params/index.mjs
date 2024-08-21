import express from "express";
const app = express();
const port = 3000;

import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(__filename);

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Buscando pelo id ${id}`);

  res.sendFile(`${currentDirectory}/templates/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${currentDirectory}/templates/index.html`);
});
app.listen(port, () => {
  console.log(`O servidor está funcionando na porta ${port}`);
});
