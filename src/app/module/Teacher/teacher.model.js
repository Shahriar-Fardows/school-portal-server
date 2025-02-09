import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    teacherId: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    subjects: [{ type: String, required: true }],
    assignedClasses: [{ type: String, required: true }],
    joiningDate: { type: Date, required: true },
    salary: { type: Number, required: true },
    employmentStatus: {
      type: String,
      enum: ["Active", "Inactive"],
      required: true,
    },
    profileImage: { type: String, required: true },
    permissions: {
      canMarkAttendance: { type: Boolean, required: true },
      canEditGrades: { type: Boolean, required: true },
      canManageStudents: { type: Boolean, required: true },
    },
  },
  { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
