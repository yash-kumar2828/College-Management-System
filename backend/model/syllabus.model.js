import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  pdf: String,
});

const semesterSchema = new mongoose.Schema({
  semesterNumber: Number,
  subjects: [subjectSchema],
});

const syllabusSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
      required: true,
    },
    semesters: [semesterSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Syllabus", syllabusSchema);