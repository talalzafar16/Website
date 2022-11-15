import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import "./StudentDashboard.css"
import Avatar from '@mui/material/Avatar';
import Logo2 from "./pic/logo2.jpg"
import AvailableCourses from './StudentDashboardScreens/AvailableCourses';
import AvailableQuizes from './StudentDashboardScreens/AvailableQuizes';
import QuizResults from './StudentDashboardScreens/QuizResults';
import YourCourses from './StudentDashboardScreens/YourCourses';
import { GetData } from '../config/firebasemethods';
import {useState ,useEffect } from 'react'

export default function StudentDashboard() {
  const [Name,SetName]=useState("");
  const params=useParams();
  const [id,setid]=useState(params.id)
  const navigate =useNavigate();
  let receiveData=() => {
    GetData("Users",id).then((res) =>{
      let a=res.First_Name
      SetName(a.toUpperCase())}).catch((err) =>{console.log(err)})
  }
  useEffect(() => {
    receiveData()
  },[])
  return (
    <Box className="outer">
  <Routes>
    <Route path="AvailableCourses" element={<AvailableCourses/>}/>
    <Route path="AvailableQuizes" element={<AvailableQuizes/>}/>
    <Route path="QuizResults" element={<QuizResults/>}/>
    <Route path="YourCourses" element={<YourCourses/>}/>
  </Routes>
      <Box className="appbar">
        <Typography variant="h2" sx={{marginLeft:"430px",marginTop:"10px",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"Black"}}>Student's Dashboard</Typography>
        <Avatar sx={{marginTop:"-58px",marginLeft:"1160px", backgroundColor: "#ee7600",width:"47px", height: "47px" }}>{Name[0]}</Avatar>
        <Typography variant="h5" sx={{marginLeft:"1214px",fontFamily: '"Times New Roman", Times, serif',marginTop:"-42px",fontSize:"28px",color:"white"}}>{Name}</Typography>
      </Box>
      <Box className="drawer">
      <Box className="whiteBox">
        <img src={Logo2} width="130" height="90px" style={{marginLeft:"20px",borderRadius:"44px"}}></img>
      </Box>
      <IconButton onClick={() => {navigate(`/StudentDashboard/${params.id}/YourCourses`)}} sx={{padding:"21px",color:"white"}}> My Courses </IconButton><hr/>
      <IconButton onClick={() => {navigate(`/StudentDashboard/${params.id}/AvailableCourses`)}} sx={{padding:"21px",color:"white"}}>Available Courses</IconButton><hr/>
      <IconButton onClick={() => {navigate(`/StudentDashboard/${params.id}/AvailableQuizes`)}} sx={{padding:"21px",color:"white"}}>Available Quiz</IconButton><hr/>
      <IconButton onClick={() => {navigate(`/StudentDashboard/${params.id}/QuizResults`)}} sx={{padding:"21px",color:"white"}}>Quiz Results</IconButton>
      </Box>
    </Box>
  );
}
