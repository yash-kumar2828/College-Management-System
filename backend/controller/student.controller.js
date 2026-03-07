import UGStudents from "../model/ug.model.js";
import Result from "../model/result.model.js";
import Fees from "../model/fees.model.js";
import Course from "../model/courses.model.js";


const getGradePoint = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  return 0;
};


export const getStudentDashboard = async (req, res) => {
  try {
    const studentId = req.studentId;

    const student = await UGStudents.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const results = await Result.find({ studentId });
    const fees = await Fees.findOne({ studentId });

const semesterMap = {};

results.forEach((item) => {
  if (!semesterMap[item.semester]) {
    semesterMap[item.semester] = {
      totalPoints: 0,
      totalSubjects: 0
    };
  }

  semesterMap[item.semester].totalPoints += getGradePoint(item.marks);
  semesterMap[item.semester].totalSubjects += 1;
});

const semesterSGPAs = Object.values(semesterMap).map((sem) => {
  return sem.totalPoints / sem.totalSubjects;
});

const cgpa = semesterSGPAs.length
  ? (
      semesterSGPAs.reduce((acc, sgpa) => acc + Number(sgpa), 0) /
      semesterSGPAs.length
    ).toFixed(2)
  : "0.00";


    res.json({
      fullname: student.fullname,
      course: student.course,
      enrollmentId: student.enrollmentId,
      cgpa: cgpa,
      feesStatus: fees?.status || "Pending",
      gender:student.gender,
      email:student.email,
      address:student.address,
      mobile:student.mobile,
      rollNumber:student.rollNumber
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};





export const getAllStudentFees = async (req, res) => {
  try {
    const students = await UGStudents.find({});

    const feeList = await Promise.all(
      students.map(async (student) => {
        const fees = await Fees.findOne({ studentId: student._id });
        return {
          roll: student.rollNumber,
          name: student.fullname,
          course: student.course,
          status: fees?.status || "Pending",
        };
      })
    );

    res.json(feeList);
  } catch (error) {
    console.log("Error fetching all student fees:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getStudentsByCourse = async (req, res) => {
  try {
    const { courseId} = req.params;
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    const students = await UGStudents.find({
      course: course.name,  
    });
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};