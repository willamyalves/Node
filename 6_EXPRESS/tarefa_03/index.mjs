import express from "express";
import url from "url";
import path from "path";
import ajuda from "./ajuda/ajuda.mjs";
import contato from "./contato/contato.mjs";
const app = express();

const filePath = url.fileURLToPath(import.meta.url);
const basePath = path.dirname(filePath);

const port = 5000;

app.use("/ajuda", ajuda);
app.use("/contato", contato);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(basePath, "templates", "home.html"));
});

app.listen(port, () => {
  console.log(`Servidor funcionando na porta ${port}`);
});
