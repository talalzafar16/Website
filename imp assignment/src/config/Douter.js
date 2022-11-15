import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import AdminLoginScreen from '../components/AdminLoginScreen';
import StudentLoginScreen from '../components/StudentLoginScreen';
import CourseRegistrationForm from '../components/CourseRegistrationForm';
import AdminDashboard from '../components/AdminDashboard';
import StudentDashboard from '../components/StudentDashboard';
import AdminRegisteration from '../components/AdminRegisteration';
export default function Douter() {
  return (
          <>
        <Router>
                <Routes>
                        <Route path="AdminLoginScreen" element={<AdminLoginScreen/>}/>
                        <Route path="StudentLoginScreen" element={<StudentLoginScreen/>}/>
                        <Route path="StudentDashboard/:id/*" element={<StudentDashboard/>}/>
                        <Route path="CourseRegistrationForm" element={<CourseRegistrationForm/>}/>
                        <Route path="AdminRegisteration" element={<AdminRegisteration/>}/>
                        <Route path="AdminDashboard/:id/*" element={<AdminDashboard/>}/>
                        <Route path="/" element={<StudentLoginScreen/>}/>
                        
                </Routes>
        </Router>
        </>)
}
