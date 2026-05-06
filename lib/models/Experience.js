import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: function () {
        return !this.isCurrent;
      },
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      trim: true,
    },
    skills: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Skill",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
export default Experience;
