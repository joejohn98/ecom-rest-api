import express from "express"
import { addProduct, allProducts } from "../controllers/productController";

const router = express.Router();

router.get("/", allProducts)


router.post("/", addProduct)





export default router;