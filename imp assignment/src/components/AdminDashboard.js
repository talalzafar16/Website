import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import "./StudentDashboard.css"
import Avatar from '@mui/material/Avatar';
import Logo2 from "./pic/logo2.jpg"
import AllCourses from './AdminDashboardScreens/AllCourses';
import CreateQuizes from './AdminDashboardScreens/CreateQuizes';
import QuizResults from './StudentDashboardScreens/QuizResults';
import { GetData } from '../config/firebasemethods';
import {useState ,useEffect } from 'react'
import Students_Data from './AdminDashboardScreens/Students_Data';

export default function AdminDashboard() {
  const [Name,SetName]=useState("");
  const params=useParams();
  const [id,setid]=useState(params.id)
  const navigate =useNavigate();
  let receiveData=() => {
    GetData("Admin",id).then((res) =>{
      let a=res.First_Name
      SetName(a.toUpperCase())}).catch((err) =>{console.log(err)})
  }
  useEffect(() => {
    receiveData()
  },[])
  return (
    <Box className="outer">
  <Routes>
    <Route path="Students_Data" element={<Students_Data/>}/>
    <Route path="CreateQuizes" element={<CreateQuizes/>}/>
    <Route path="QuizResults" element={<QuizResults/>}/>
    <Route path="AllCourses" element={<AllCourses/>}/>
  </Routes>
      <Box className="appbar">
        <Typography variant="h2" sx={{marginLeft:"430px",marginTop:"10px",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"Black"}}>Admin's Dashboard</Typography>
        <Avatar sx={{marginTop:"-58px",marginLeft:"1160px", backgroundColor: "#ee7600",width:"47px", height: "47px" }}>{Name[0]}</Avatar>
        <Typography variant="h5" sx={{marginLeft:"1214px",fontFamily: '"Times New Roman", Times, serif',marginTop:"-42px",fontSize:"28px",color:"white"}}>{Name}</Typography>
      </Box>
      <Box className="drawer">
      <Box className="whiteBox">
        <img src={Logo2} width="130" height="90px" style={{marginLeft:"20px",borderRadius:"44px"}}></img>
      </Box>
      <IconButton onClick={() => {navigate(`/AdminDashboard/${params.id}/Students_Data`)}} sx={{padding:"21px",color:"white"}}> Students Data </IconButton><hr/>
      <IconButton onClick={() => {navigate(`/AdminDashboard/${params.id}/CreateQuizes`)}} sx={{padding:"21px",color:"white"}}>Create Quiz</IconButton><hr/>
      <IconButton onClick={() => {navigate(`/AdminDashboard/${params.id}/QuizResults`)}} sx={{padding:"21px",color:"white"}}>Quiz Results</IconButton><hr/>
      <IconButton onClick={() => {navigate(`/AdminDashboard/${params.id}/AllCourses`)}} sx={{padding:"21px",color:"white"}}>All Courses</IconButton>
      </Box>
    </Box>
  );
}
