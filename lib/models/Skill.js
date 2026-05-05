import mongoose from "mongoose";
import { category } from "../date";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: category,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    proficiency: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const Skill = mongoose.models.Skill || mongoose.model("Skill", skillSchema);
export default Skill;
