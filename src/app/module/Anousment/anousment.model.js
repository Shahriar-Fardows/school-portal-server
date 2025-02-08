import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

announcementSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Announcement = mongoose.model("Announcement", announcementSchema);
