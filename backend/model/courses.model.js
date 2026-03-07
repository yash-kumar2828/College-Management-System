import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({
    id: {
      type: String, 
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    name: {
      type: String,         
      required: true,
      trim: true,
    },

    departmentId: {
      type: String,   
      required: true,
      trim: true,
      lowercase: true,
    },

    duration: {
      type: String, 
      required: true,
    },

    totalSemesters: {
      type: Number,
      required: true,
      min: 1,
    },

    type: {
      type: String, 
      enum: ["UG", "PG"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Courses',courseSchema);