import express from "express";
import url from "url";
import path from "path";
const router = express.Router();

const filePath = url.fileURLToPath(import.meta.url);
const basePath = path.dirname(filePath);

router.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(basePath, "..", "templates", "ajuda.html"));
});

export default router;
