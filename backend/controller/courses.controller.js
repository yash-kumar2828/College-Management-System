import courses from '../model/courses.model.js';
import Courses from '../model/courses.model.js';

export const createCourse=async(req,res)=>{
    try {
        const {id,name,departmentId,duration,totalSemesters,type}=req.body;
        const exit=await Courses.findOne({id})
        if(exit){
            return res.status(400).json({message:'course already exit!'});
        }
        const course=await Courses.create({
            id,name,departmentId,duration,totalSemesters,type
        });
        res.status(200).json({message:'Course create successfully',course});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


export const getAllCourse=async(req,res)=>{
    try {
        const courses=await Courses.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};



export const getCourseById = async (req, res) => {
  try {
    const course = await courses.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteCourse=async(req,res)=>{
    try {
        const id=req.params.id;
        const deleted=await Courses.findByIdAndDelete(id,{
       ...req.body
    });
        if(!deleted){
            return res.status(400).json({message:"Course not found"});
        }

        return res.status(200).json({message:"Course deleted!"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}



