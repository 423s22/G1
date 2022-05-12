import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 200,
  },
  img: {
    type: String,
  },
  secondary_desc: {
    type: String,
  },
  CPT: {
    type: Array,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
