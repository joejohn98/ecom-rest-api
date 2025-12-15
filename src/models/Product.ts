import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be atleast 3 characters"],
      maxlength: [100, "Title must be atmost 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [20, "Description must be atleast 20 characters"],
      maxlength: [2000, "Description must be atmost 2000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
