import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import adminRoute from './route/admin.route.js'
import courseRoute from './route/course.route.js';
import ugStudentRoute from './route/ug.route.js';
import cookieParser from 'cookie-parser';
import resultRoute from "./route/result.route.js";
import feesRoute from "./route/fees.route.js";
import contactRoute from './route/contact.route.js'
import facultyRoute from './route/facultyData.route.js';
import noticeRoute from './route/notice.route.js';
import syllabusRoute from './route/syllabus.route.js';
import feedbackRoute from './route/feedback.route.js';



const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://college-management-system-frontend-me9s.onrender.com/", 
  credentials: true
}));
app.use(cookieParser());

dotenv.config();
const port = process.env.PORT || 3200;
const mongoDB=process.env.MONGODB;

//connect to the database
try {
  mongoose.connect(mongoDB);
  console.log("Connected to the Database");
    
} catch (error) {
  console.log(error);
}

 
//deining route 
app.use('/admin',adminRoute);
app.use('/admin',courseRoute);
app.use('/student',ugStudentRoute);
app.use("/course", resultRoute);
app.use("/admin", feesRoute);
app.use("/student",contactRoute);
app.use("/faculty",facultyRoute);
app.use("/notice",noticeRoute);
app.use("/syllabus",syllabusRoute);
app.use("/student",feedbackRoute);




app.listen(port, () => { 
  console.log(`app listening on port ${port}`)
})
