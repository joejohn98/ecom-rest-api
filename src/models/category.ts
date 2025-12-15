import mongoose from "mongoose"


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        unique: true,
        minlength: [3, "Category name must be at least 3 characters"],
        maxlength: [50, "Category name must be at most 50 characters"],
    }
}, {
    timestamps: true,
})

const Category = mongoose.model('Category', categorySchema);

export default Category;
