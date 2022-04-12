import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    maxlength: 60,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 500,
  }
});

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
