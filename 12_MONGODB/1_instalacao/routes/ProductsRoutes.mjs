import express from "express";

const router = express.Router();

import ProductController from "../controllers/ProductController";

router.get("/", ProductController.showProducts);

export default router;
