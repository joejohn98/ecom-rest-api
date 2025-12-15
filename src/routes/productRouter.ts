import express from "express"
import { addProduct, allProducts, updateProduct } from "../controllers/productController";

const router = express.Router();

router.get("/", allProducts)


router.post("/", addProduct)

router.put("/:id", updateProduct)





export default router;