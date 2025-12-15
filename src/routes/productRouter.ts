import express from "express"
import { addProduct, allProducts, deleteProduct, updateProduct } from "../controllers/productController";

const router = express.Router();

router.get("/", allProducts)


router.post("/", addProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)





export default router;