import type { Request, Response } from "express";
import Product from "../models/Product";

const allProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
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


export { allProducts };