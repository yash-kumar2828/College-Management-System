import mongoose from "mongoose";

const ugStudentSchema = new mongoose.Schema({

    // personal detail 
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    fatherName: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String, 
        required: true,
        enum: ['Female', 'Male', 'Other']
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['GEN', 'OBC', 'SC', 'ST']
    },

    // contact detail 
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },

    //academic detail
    tenthBoard: {
        type: String,
        required: true
    },
    tenthYear: {
        type: String,
        required: true
    },
    tenthPercentage: {
        type: String,
        required: true
    },
    twelfthBoard: {
        type: String,
        required: true
    },
    twelfthYear: {
        type: String,
        required: true
    },
    twelfthPercentage: {
        type: String,
        required: true
    },

    //course selection
    course: {
        type: String,
        required: true,
        trim: true
    },

    //declaration section
    declaration: {
        type: Boolean,
        required: true
    },

    //enrollment and password
    enrollmentId: {
        type: String,
        required: true,
        unique: true
    },
    rollNumber: {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    }

}, { timestamps: true });

export default mongoose.model("UGStudents", ugStudentSchema);