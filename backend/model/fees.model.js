import mongoose from "mongoose";

const feesSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UGStudents",
    required: true
  },
  status: {
    type: String,
    enum: ["Paid", "Pending"],
    default: "Pending"
  }
}, { timestamps: true });

export default mongoose.model("Fees", feesSchema);