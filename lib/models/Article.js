import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: [Object],
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
      trim: true,
    },

    tags: {
      type: [String],
      required: false,
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Article =
  mongoose.model.Article || mongoose.model("Article", articleSchema);
export default Article;
