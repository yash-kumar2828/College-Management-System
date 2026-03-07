import Fees from "../model/fees.model.js";
import UGStudents from "../model/ug.model.js";

export const addFees = async (req, res) => {
  try {
    const { rollNumber, amount, status } = req.body;

    const student = await UGStudents.findOne({ rollNumber });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const fees = await Fees.findOneAndUpdate(
      { studentId: student._id },
      { amount, status },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Fees updated",
      fees,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};