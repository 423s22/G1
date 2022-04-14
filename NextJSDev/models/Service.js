import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  procedure: {
    type: String,
    required: true,
    maxlength: 60,
  },
  code:{
    type: String,
    required: true,
    maxlength: 30,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 500,
  }
});

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
