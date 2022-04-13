import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  medcode: {
    type: String,
    required: true,
    maxlength: 50,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200,
  },
  img: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
