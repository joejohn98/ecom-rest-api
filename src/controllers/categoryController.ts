import type { Request, Response } from "express";
import Category from "../models/category";
import mongoose from "mongoose";

const allCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Category.find()
      .select("-__v")
      .sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: categories,
    });
  } catch (error) {
    console.log("Error fetching categories:", error);
    res.status(500).json({
      status: "fail",
      message: "failed to fetch categories",
    });
  }
};

const addCategory = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({
      status: "fail",
      message: "Name is required",
    });
    return;
  }

  try {
    const newCategory = await Category.create({
      name,
    });
    res.status(201).json({
      status: "success",
      message: "Category added successfully",
      data: newCategory,
    });
  } catch (error) {
    console.log("Error adding category:", error);
    res.status(500).json({
      status: "fail",
      message: "failed to add category",
    });
  }
};

const updateCategory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "fail",
      message: "Invalid product ID format or missing ID",
    });
    return;
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCategory) {
      res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Category updated successfully",
      updatedCategory,
    });
  } catch (error) {
    console.log("Error updating category", error);
    res.status(500).json({
      status: "fail",
      message: "failed to update category",
    });
  }
};

const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Category ID format or missing ID",
    });
    return;
  }

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory ) {
      res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    console.log("Error deleting Category", error);
    res.status(500).json({
      status: "fail",
      message: "failed to delete category",
    });
  }
};

export {
    allCategories,
    addCategory,
    updateCategory,
    deleteCategory
};
