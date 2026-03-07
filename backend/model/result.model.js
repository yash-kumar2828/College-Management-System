import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UGStudents",
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  grade: {
    type: String
  },
  semester: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Result", resultSchema);