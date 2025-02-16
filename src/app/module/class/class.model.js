import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sutdentNo: { type: String, required: true },
    teacher: { type: String, required: true },
  },
  { timestamps: true }
);

classSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Class = mongoose.model("Class", classSchema);
