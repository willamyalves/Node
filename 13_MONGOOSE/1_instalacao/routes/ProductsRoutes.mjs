import express from "express";
import ProductController from "../controllers/ProductController.mjs";

const router = express.Router();

router.get("/", ProductController.showProducts);
router.get("/product/create", ProductController.createProduct);
router.post("/product/create", ProductController.createProductPost);
router.get("/product/:id", ProductController.productDetails);
router.post("/remove/:id", ProductController.removeProduct);
router.get("/product/edit/:id", ProductController.editProduct);
router.post("/product/edit/post/:id", ProductController.editProductPost);

export default router;
