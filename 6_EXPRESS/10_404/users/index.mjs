import express from "express";
const router = express.Router();

import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(__filename);

// Ajuste o caminho para refletir a pasta 'templates' na raiz
router.get("/create", (req, res) => {
  res.sendFile(path.join(currentDirectory, "..", "templates", "userForm.html")); // Correção
});

router.post("/save", (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(currentDirectory, "..", "templates", "userForm.html")); // Correção
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Buscando pelo id ${id}`);
  res.sendFile(path.join(currentDirectory, "..", "templates", "users.html")); // Correção
});

export default router;
