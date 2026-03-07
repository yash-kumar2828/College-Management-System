import Syllabus from "../model/syllabus.model.js";

export const addSemester = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { semesterNumber, subjects } = req.body;
    
    let syllabus = await Syllabus.findOne({ courseId });

    if (!syllabus) {
      syllabus = new Syllabus({
        courseId,
        semesters: [],
      });
    }

    let semester = syllabus.semesters.find(
      (sem) => sem.semesterNumber === semesterNumber
    );
    
    if (!semester) {
      syllabus.semesters.push({
        semesterNumber,
        subjects,
      });
    } else {
      
      for (let newSub of subjects) {
        const exists = semester.subjects.find(
          (sub) => sub.code === newSub.code
        );
        
        if (exists) {
          return res.status(400).json({
            success: false,
            message: `Subject code ${newSub.code} already exists`,
          });
        }
        
        semester.subjects.push(newSub);
      }
    }
    
    await syllabus.save();
    
    res.status(200).json({
      success: true,
      message: "Syllabus updated successfully",
      data: syllabus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSyllabusByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const syllabus = await Syllabus.findOne({ courseId });

    if (!syllabus) {
      return res.status(404).json({
        message: "Syllabus not found",
      });
    }

    res.json(syllabus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSubjectsBySemester = async (req, res) => {
  try {
    const { courseId, semester } = req.params;

    const syllabus = await Syllabus.findOne({ courseId });

    if (!syllabus) {
      return res.status(404).json({ message: "Syllabus not found" });
    }

    const sem = syllabus.semesters.find(
      (s) => Number(s.semesterNumber) === Number(semester)
    );

    if (!sem) {
      return res.status(404).json({ message: "Semester not found" });
    }

    res.status(200).json(sem.subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getSyllabusBySemester = async (req, res) => {
  try {
    const { courseId, semesterNumber } = req.params;

    const syllabus = await Syllabus.findOne({ courseId });

    if (!syllabus) {
      return res.status(404).json({
        success: false,
        message: "Syllabus not found",
      });
    }

    const semester = syllabus.semesters.find(
      (sem) => sem.semesterNumber === Number(semesterNumber)
    );

    if (!semester) {
      return res.status(404).json({
        success: false,
        message: "Semester not found",
      });
    }

    res.status(200).json({
      success: true,
      data: semester,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

