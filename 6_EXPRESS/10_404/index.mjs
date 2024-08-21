import express from "express";
const app = express();
const port = 3000;

import url from "url";
import path from "path";

import users from "./users/index.mjs";

const __filename = url.fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(__filename);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/users", users);

// Corrigido o caminho para o arquivo index.html usando path.join
app.get("/", (req, res) => {
  res.sendFile(path.join(currentDirectory, "templates", "index.html")); // Correção
});

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(currentDirectory, "templates", "404.html"));
});

app.listen(port, () => {
  console.log(`O servidor está funcionando na porta ${port}`);
});
