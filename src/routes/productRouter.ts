import express from "express"
import { addProduct, allProducts, deleteProduct, getProductsByCategory, getSingleProduct, updateProduct } from "../controllers/productController";


const router = express.Router();

router.get("/", allProducts)


router.post("/", addProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

router.get("/product/:id", getSingleProduct)

router.get("/category/:id", getProductsByCategory)



export default router;