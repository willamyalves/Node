import express from "express";
import ProductController from "../controllers/ProductController.mjs";

const router = express.Router();

router.get("/", ProductController.showProducts);
router.get("/product/create", ProductController.createProduct);
router.post("/product/create", ProductController.createProductPost);

export default router;
