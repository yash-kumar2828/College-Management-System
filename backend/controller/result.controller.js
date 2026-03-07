import Result from "../model/result.model.js";
import UGStudents from "../model/ug.model.js";

const getGrade = (marks) => {
  if (marks >= 90) return "O";
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "B";
  if (marks >= 50) return "C";
  if (marks >= 40) return "P";
  return "F";
};
const getGradePoint = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  return 0;
};

export const addResult = async (req, res) => {
  try {
    const { rollNumber, subject, marks, semester } = req.body;

    if (!rollNumber || !subject || !marks || !semester) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const student = await UGStudents.findOne({ rollNumber });
    if (!student) return res.status(404).json({ message: "Student not found" });

    const grade = getGrade(marks);
    const result = await Result.findOneAndUpdate(
      { studentId: student._id, subject, semester },
      { marks, grade },
      { new: true, upsert: true }
    );
    res.status(201).json({ message: "Result added/updated", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getStudentResult = async (req, res) => {
  try {
    const studentId = req.studentId;
    const results = await Result.find({ studentId });
    if (!results.length) {
      return res.status(404).json({ message: "No results found" });
    }
    const groupedResults = {};
    results.forEach((item) => {
      if (!groupedResults[item.semester]) {
        groupedResults[item.semester] = {
          subjects: []
        };
      }
      groupedResults[item.semester].subjects.push({
        name: item.subject,
        marks: item.marks,
        grade: item.grade
      });
    });
    Object.keys(groupedResults).forEach((sem) => {
      const semData = groupedResults[sem];

      const totalGradePoints = semData.subjects.reduce(
        (acc, sub) => acc + getGradePoint(sub.marks),
        0
      );

      const sgpa = totalGradePoints / semData.subjects.length;

      groupedResults[sem].sgpa = Number(sgpa.toFixed(2)); 
    });

    res.status(200).json(groupedResults);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};



export const getAllStudentsSummary = async (req, res) => {
  try {
    const students = await UGStudents.find();
    const allSummaries = [];
    for (let student of students) {
      const results = await Result.find({ studentId: student._id });

      if (!results.length) continue;
      const summary = {};
      results.forEach((item) => {
        if (!summary[item.semester]) summary[item.semester] = { subjects: [] };
        summary[item.semester].subjects.push({
          name: item.subject,
          marks: item.marks,
          grade: item.grade,
        });
      });
      const finalSummary = Object.keys(summary).map((sem) => {
        const semData = summary[sem];
        const totalGradePoints = semData.subjects.reduce(
          (acc, sub) => acc + getGradePoint(sub.marks),
          0
        );
        const sgpa = totalGradePoints / semData.subjects.length;
        return {
          semester: Number(sem),
          sgpa: Number(sgpa.toFixed(2)),
          subjects: semData.subjects,
        };
      });
      allSummaries.push({
        rollNumber: student.rollNumber,
        fullname: student.fullname,
        course: student.course,
        summary: finalSummary,
      });
    }
    res.status(200).json(allSummaries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};