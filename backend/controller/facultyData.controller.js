import faculty from "../model/facultyData.model.js";
import { generateFacultyId,generatePassword } from "../generate/FacultyIDPassword.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const faculties = async (req, res) => {
    try {
        const {
            fullname, fatherName, dob, gender, nationality, category,
            mobile, email, address, city, state, pincode,highestQualification,experience,
            declaration
        } = req.body;

        const existingFaculty = await faculty.findOne({ email });
        if (existingFaculty) {
            return res.status(400).json({ message: "Faculty with this email already exists" });
        }

        const facultyId = await generateFacultyId();
        const password = generatePassword();

        const hashedPashword=await bcrypt.hash(password,10);

        await faculty.create({
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
            highestQualification,
            experience,
            declaration,
            facultyId,
            password:hashedPashword
        });

        res.status(201).json({
            message: "Faculty registered successfully",
            facultyId,
            password:password
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};


export const facultyLogin = async (req, res) => {
  try {
    const { facultyId, password } = req.body;

    const teacher = await faculty.findOne({ facultyId });

    if (!teacher) {
      return res.status(400).json({ message: "Invalid Faculty ID" });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: teacher._id },
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
      role: "faculty",
      student: {
        id: teacher._id,
        fullname: teacher.fullname,
        email: teacher.email,
        mobile: teacher.mobile
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



