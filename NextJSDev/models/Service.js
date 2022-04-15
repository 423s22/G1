import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  hospital: {
    type: String,
    required: true,
    maxlength: 60,
  },
});

export default mongoose.models.Sercice ||
  mongoose.model("Service", ServiceSchema);
