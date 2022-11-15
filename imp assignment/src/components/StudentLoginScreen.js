import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import background from "./pic/background.jpg"
import Logo from "./pic/logo.jpg"
import { useNavigate } from 'react-router-dom'
import { Login } from '../config/firebasemethods'
import CircularProgress from '@mui/material/CircularProgress';

export default function StudentLoginScreen() {
  let [Email,setEmail]=useState("");
  let [loader,setloader]=useState(false)

  let [Password,setPassword]=useState("");
  const  navigate =useNavigate();
  let submit=() => {
    setloader(true)
    Login("Users",{Email:Email,Password:Password}).then((succ)=> {
    setloader(false)
      navigate(`/StudentDashboard/${succ.User_Id}`)
    }).catch((err) => {
    setloader(false)
      console.log(err)})
  }
  return (
    <Box sx={{height:"624.8px",width:"1366px",position:"absolute"}} style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
    <Box >
      <img src={Logo} style={{position:"realtive",marginTop:"24px",marginLeft:"220px",borderRadius:"80px"}} width="149px" height="149px"/>
      <Typography variant="h3"sx={{marginLeft:"390px",marginTop:"-120px",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"Black"}}>Learning Management System</Typography>
    </Box>
    <Box sx={{borderRadius:"19px",marginTop:"40px",marginLeft:"484px",position:"relative",height:"400px",width:"434px",backgroundColor:"#faebd7"}}>
      <Box sx={{backgroundColor:"#0096FF",height:"49px"}}>
        <Box>
        <Button sx={{color:"black",marginLeft:"40px",marginTop:"10px"}} onClick={() => {navigate("/StudentLoginScreen")}}>Student Portal</Button>
        </Box>
        <Box sx={{borderLeft:"2px solid black",marginLeft:"219px",marginTop:"-47px",height:"49px"}}>
        <Button sx={{color:"black",marginLeft:"44px",marginTop:"10px"}} onClick={() => {navigate("/AdminLoginScreen")}} >Admin Portal</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" sx={{marginLeft:"100px",marginTop:"20px",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"#0047AB"}}>Student Portal</Typography>
        <TextField sx={{marginLeft:"70px",marginTop:"30px",width:"300px"}} type="text" onChange={(e)=>{setEmail(e.target.value)}} label="Enter email"></TextField>
        <TextField sx={{marginLeft:"70px",marginTop:"30px",width:"300px"}} type="password" onChange={(e)=>{setPassword(e.target.value)}} label="Enter Password"></TextField>
      </Box>
        <Box>
        <Button variant="contained" onClick={()=>{submit()}} sx={{marginLeft:"160px",marginTop:"30px",width:"133px"}}>{loader?<CircularProgress/>:"Login"}</Button>
        </Box>
    </Box>
  </Box>
  )
}