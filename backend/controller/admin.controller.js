import Admin from "../model/admin.model.js";
import bcrypt from "bcrypt";
import Fees from "../model/fees.model.js";
import UGStudents from "../model/ug.model.js";

export const addAdmin = async (req, res) => {
  try {
    const { fullname, adminId, password } = req.body;
    const existingAdmin = await Admin.findOne({ adminId });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({
      fullname,
      adminId,
      password: hashedPassword
    });
    res.status(201).json({ message: "New admin added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const login = async (req, res) => {
  try {
    const { adminId, password } = req.body;

    const adminLogin = await Admin.findOne({ adminId });
    if (!adminLogin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, adminLogin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successfully!",
      admin: {
        id: adminLogin._id,
        adminId: adminLogin.adminId
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const updateFees = async (req, res) => {
  try {
    const { rollNumber, status } = req.body;

    if (!rollNumber || !status === undefined) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const student = await UGStudents.findOne({ rollNumber });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const data = await Fees.findOneAndUpdate(
      { studentId: student._id },
      { status},
      { upsert: true, returnDocument: 'after' }
    );

    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating fees" });
  }
};
