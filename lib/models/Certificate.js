import mongoose from "mongoose";
import { category } from "../date";

const certificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    issuer: {
      type: String,
      required: true,
      trim: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: false,
      default: null,
    },
    credentialId: {
      type: String,
      required: false,
      trim: true,
    },
    credentialUrl: {
      type: String,
      required: false,
      trim: true,
    },
    imgUrl: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      required: true,
      default: false,
    },
    category: {
      type: String,
      enum: category,
      required: true,
      default: "Other",
    },
  },
  { timestamps: true },
);

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificationSchema);

export default Certificate;
