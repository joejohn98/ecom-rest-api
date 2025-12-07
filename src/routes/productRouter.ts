import express from "express"
import { allProducts } from "../controllers/productController";

const router = express.Router();

router.get("/", allProducts)








export default router;