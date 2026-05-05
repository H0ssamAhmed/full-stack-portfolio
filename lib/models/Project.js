import mongoose from "mongoose";
import { category } from "../date";

const resultSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const skillSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill",
      required: true,
    },
    name: { type: String, required: true },
    icon: { type: String, required: false },
  },
  { _id: false },
);

const ProjectSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      trim: true,
      default: "",
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    objective: {
      type: String,
      trim: true,
      default: "",
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    skills: {
      type: [skillSchema],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    gallery: {
      type: [String],
      default: [],
    },

    results: {
      type: [resultSchema],
      default: [],
    },

    githubUrl: {
      type: String,
      trim: true,
      default: "",
    },

    liveUrl: {
      type: String,
      trim: true,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    category: {
      type: String,
      required: true,
      enum: category,
    },
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
