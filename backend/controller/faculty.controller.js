import Result from "../model/result.model.js";
import Faculty from '../model/facultyData.model.js'

export const getFacultyDashboard = async (req, res) => {
  try {
    const facultyId = req.facultyId;

    const faculty = await Faculty.findById(facultyId);
    if (!faculty) {
      return res.status(404).json({ message: "faculty not found" });
    }
    res.json({
      fullname: faculty.fullname,
      facultyId: faculty.facultyId,
      gender:faculty.gender, 
      email:faculty.email,
      address:faculty.address,
      mobile:faculty.mobile,
      highestQualification:faculty.highestQualification,
      experience:faculty.experience
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getFaculty=async(req,res)=>{
    try{
        const faculty=await Faculty.find();
        res.json(faculty);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
 