import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Routes/AuthLayout.jsx';
import Home from './pages/Home.jsx';
import StudentLogin from './pages/login/StudentLogin.jsx';
import FacultyForm from './pages/multipleForms/FacultyForm.jsx';
import FacultyLogin from './pages/login/FacultyLogin.jsx';
import AdminLogin from './pages/login/AdminLogin.jsx';
import UGForm from './pages/multipleForms/UGForm.jsx';
import Courses from './pages/Courses.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import FacultyDashboard from './pages/faculty/FacultyDashboard.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import StudentProfile from './pages/student/StudentProfile.jsx';
import StudentLayout from './layouts/StudentLayouts.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import FacultyLayout from './layouts/FacultyLayout.jsx';
import StudentResult from './pages/student/StudentResult.jsx';
import CourseSyllabus from './components/common/CourseSyllabus.jsx';
import FacultyProfile from './pages/faculty/FacultyProfile.jsx';
import FacultyUploadResult from './pages/faculty/FacultyUploadResult.jsx';
import UploadSyllabus from './pages/admin/UploadSyllabus.jsx';
import ManageStudents from './pages/admin/ManageStudents.jsx';
import ManageFaculty from './pages/admin/ManageFaculty.jsx';
import ManageCourses from './pages/admin/ManageCourses.jsx';
import ManageResult from './pages/admin/ManageResult.jsx';
import ManageStudentFees from './pages/admin/ManageStudentFees.jsx';
import AddNewAdmin from './pages/login/AddNewAdmin.jsx';
import AddCourse from './pages/admin/AddCourse.jsx';
import StudentData from './pages/multipleForms/StudentData.jsx';
import FacultyData from './pages/multipleForms/FacultyData.jsx';
import UpdateFees from './pages/admin/UpdateFees.jsx';
import CreateNotice from './pages/admin/CreateNotice.jsx';
import ContactList from './pages/admin/ContactList.jsx';
import Feedback from './pages/login/Feedback.jsx';
import ViewFeedback from './pages/admin/ViewFeedback.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {index:true,element:<Home />},
      {path:'courses',element:<Courses />},
      {path:"courses/:courseId",element:<CourseSyllabus/>}
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      { path: 'studentLogin', element: <StudentLogin/>},
      {path:'facultyLogin',element:<FacultyLogin />},
      {path:'adminLogin',element:<AdminLogin />},
      {path:'addAdmin',element:<AddNewAdmin />},
      {path:'addCourse',element:<AddCourse />},
      {path:'studentData',element:<StudentData />},
      {path:'facultyData',element:<FacultyData />},
      {path:'createNotice',element:<CreateNotice />},
      {path:'feedback',element:<Feedback />}
    ],
  },
  {
    path: "/form",
    element: <App />,
    children: [
      { path: "facultyForm", element: <FacultyForm />},
      {path:'underGraduateForm',element:<UGForm />}
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {path:'dashboard',element:<AdminDashboard />}, 
      {path:'students',element:<ManageStudents />},
      {path:'faculty',element:<ManageFaculty />},
      {path:'courses',element:<ManageCourses />},
      {path:'results',element:<ManageResult />},
      {path:'studentFees',element:<ManageStudentFees />},
      {path:'syllabus',element:<UploadSyllabus />},
      {path:'updateFee',element:<UpdateFees />},
      {path:'contactList',element:<ContactList />},
      {path:'viewFeedback',element:<ViewFeedback />}
    ],
  },
  {
    path: '/student',
    element: <StudentLayout />,
    children: [
      {path:'dashboard',element:<StudentDashboard />},
      {path:'profile',element:<StudentProfile />},
      {path:'result',element:<StudentResult />}
    ],
  },
  {
    path: '/faculty',
    element: <FacultyLayout />,
    children: [
      {path:'dashboard',element:<FacultyDashboard />}, 
      {path:'profile',element:<FacultyProfile />},
      {path:'uploadResult',element:<FacultyUploadResult />}
      
    ],
  },
  {
    path: '*', element:<PageNotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
