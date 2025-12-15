import type { Request, Response } from "express";
import Product from "../models/Product";
import mongoose from "mongoose";

const allProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await Product.find()
      .select("-__v")
      .sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      results: products.length,
      data: products,
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    res.status(500).json({
      status: "fail",
      message: "failed to fetch products",
    });
  }
};

const addProduct = async (req: Request, res: Response): Promise<void> => {
  const { title, description, price, category } = req.body;

  if (!title || !description || !price || !category) {
    res.status(400).json({
      status: "fail",
      message: "Title, description, price and category are required",
    });
    return;
  }

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      category,
    });
    res.status(201).json({
      status: "success",
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("Error adding product:", error);
    res.status(500).json({
      status: "fail",
      message: "failed to add product",
    });
  }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "fail",
      message: "Invalid product ID format or missing ID",
    });
    return;
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.log("Error updating product", error);
    res.status(500).json({
      status: "fail",
      message: "failed to update product",
    });
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Product ID format or missing ID",
    });
    return;
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    console.log("Error deleting Product", error);
    res.status(500).json({
      status: "fail",
      message: "failed to delete product",
    });
  }
};

export { allProducts, addProduct, updateProduct, deleteProduct };
