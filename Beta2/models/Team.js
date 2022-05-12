import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    img: {
      type: String,
      required: true,
      maxlength: 200,
    },
    bio: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    role: {
      type: String,
      required: true,
      maxlength: 200,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
