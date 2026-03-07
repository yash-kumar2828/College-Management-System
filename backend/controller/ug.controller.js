import ugStudent from '../model/ug.model.js'
import {generateEnrollmentId,generatePassword, generateRollNumber}  from '../generate/StudentIdAndPassword.js'
import bcrypt from 'bcrypt'; 
import jwt from "jsonwebtoken";



export const student = async (req, res) => {
    try {
        const {
            fullname, fatherName, dob, gender, nationality, category,
            mobile, email, address, city, state, pincode,
            tenthBoard, tenthYear, tenthPercentage,
            twelfthBoard, twelfthYear, twelfthPercentage,
            course, declaration
        } = req.body;

        const existingStudent = await ugStudent.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this email already exists" });
        }

        const enrollmentId = await generateEnrollmentId();
        const rollNumber=await generateRollNumber();
        const password = generatePassword();

        const hashedPashword=await bcrypt.hash(password,10);

        await ugStudent.create({
            fullname,
            fatherName,
            dob,
            gender,
            nationality,
            category,
            mobile,
            email,
            address,
            city,
            state,
            pincode,
            tenthBoard,
            tenthYear,
            tenthPercentage,
            twelfthBoard,
            twelfthYear,
            twelfthPercentage,
            course,
            declaration,
            enrollmentId,
            rollNumber,
            password:hashedPashword
        }); 

        res.status(201).json({
            message: "Student registered successfully",
            enrollmentId,
            rollNumber,
            password:password
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};



export const getStudent=async(req,res)=>{
    try{
        const students=await ugStudent.find();
        res.json(students);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


export const studentLogin = async (req, res) => {
  try {
    const { enrollmentId, password } = req.body;

    const student = await ugStudent.findOne({ enrollmentId });

    if (!student) {
      return res.status(400).json({ message: "Invalid Enrollment ID" });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: student._id },
      "yashSecretKey",
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      message: "Login successful",
      role: "student",
      student: {
        id: student._id,
        fullname: student.fullname,
        email: student.email,
        mobile: student.mobile
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



export const getMyProfile = async (req, res) => {
  try {
    const student = await ugStudent
      .findById(req.studentId)
      .select("-password");

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};