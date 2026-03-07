import mongoose from "mongoose";

const facultySchema=new mongoose.Schema({

    // personal detail 
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    fatherName:{
        type:String,
        required:true,
        trim:true
    },
     dob:{
        type:Date,
        required:true
    },
     gender:{
        type:String,
        required:true,
        enum:['Female','Male','Other']
    },
     nationality:{
        type:String,
        required:true,
        trim:true
    },
     category:{
        type:String,
        required:true,
        enum:['GEN','OBC','SC','ST']
    },

    // contact detail 
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true 
    },
    pincode:{
        type:String,
        required:true
    },

    //academic detail
    highestQualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    
  //declaration section
  declaration:{
    type:Boolean,
    required:true
  },

  //enrollment and password
 facultyId:{
    type: String, 
    required: true, 
    unique: true 
 },
 password:
 { 
    type: String, 
    required: true 
}

},{timestamps:true});

export default mongoose.model("Faculty",facultySchema);