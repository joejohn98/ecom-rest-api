import express from "express";
import {
  addCategory,
  allCategories,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", allCategories);

router.post("/", addCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

export default router;
