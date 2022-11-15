import { Box, Button, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Signup } from '../config/firebasemethods'
import CircularProgress from '@mui/material/CircularProgress';
export default function CourseRegistrationForm() {
  const navigate = useNavigate();
  let [CourseName,SetCourseName]=useState(["Flutter Course","MERN stack","Web development","Full stack developer"])
  let [Section,SetSection]=useState(["A","B","C"])
  let [F_Name,setF_Name]=useState("");
  let [L_Name,setL_Name]=useState("");
  let [SelectedCourse,setSelectedCourse]=useState("");
  let [SelectedSection,setSelectedSection]=useState("");
  let [Contact,setContact]=useState("");
  let [StudentNic,setStudentNic]=useState("");
  let [Father_Name,setFather_Name]=useState("");
  let [Father_Cnic,setFather_Cnic]=useState("");
  let [Email,setEmail]=useState("");
  let [Password,setPassword]=useState("");
  let [F_contact,setF_contact]=useState("");
  let [E_contact,setE_contact]=useState("");
  let [DOB,setDOB]=useState("");
  let [Rollno,setRollno]=useState("");
  let [RegisteredDate,setRegisteredDate]=useState("");
  let [Age,SetAge]=useState("0")
  let [Pop,SetPop]=useState(false)
  let [Msg,SetMsg]=useState("")
  let [loader,setloader]=useState(false)
  
  
  let GenerateAge=(a) =>{
    let d1=new Date()  
    let d2=new Date(a)
    let diff=d1.getFullYear()-d2.getFullYear()
    setDOB(d2.toString())
    setRegisteredDate(d1.toString())
    SetAge(diff)
    }
let InvokePop=(ms) => {
  SetMsg(ms)
  SetPop(true)

}

    let Submit=() =>{
      var abbr = SelectedCourse.split(' ').map(function(item){return item[0]}).join('');
      let a= abbr.toUpperCase()+"-"+ 22 + Contact[2]+Contact[7]
      setRollno(a)
      setloader(true)
      let obj={"First_Name":F_Name,
      "Last_Name":L_Name,
         "Course":SelectedCourse,
         "Section":SelectedSection,
         "Email":Email,
         "Password":Password,
         "Contact":Contact,
         "Nic":StudentNic,
         "Father_Name":Father_Name,
         "Father_Nic":Father_Cnic,
         "Father_Contact":F_contact,
         "Emergency_Contact":E_contact,
         "Date_Of_Birth":DOB,
         "Age":Age,
         "Registered_Date":RegisteredDate,
        "Roll_Number":a}
        Signup("Users",obj).then((res)=>{
           setloader(false)
           InvokePop(res);
          }).catch((err)=>{
        setloader(false)
        const myJSON = JSON.stringify(err.code)
        InvokePop(myJSON);
      })
    }
  return (
    <div>
      
<Box sx={{backgroundColor: '#E5E4E2',width: "1349px",height: "1499px",position:"absolute"}}>
<Box sx={{marginTop:"28px"}}>
  <Typography variant="h2" sx={{textAlign:"center",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold",color:"#0047AB"}}>Course Regitrartion Form</Typography>
</Box>
<Box sx={{borderLeft:"18px solid #0047AB",marginLeft:"200px",borderRadius:"20px",marginTop:"60px",backgroundColor: 'white',height:"1280px",width:"1000px"}}>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography type="text" sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>First Name</Typography>
  <TextField placeholder="e.g Mohammad Talal" onChange={(e)=>{setF_Name(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-164px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Last Name</Typography>
  <TextField type="text" placeholder="e.g Zafar" onChange={(e)=>{setL_Name(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Course</Typography>
  <TextField select label="Select Course" onChange={(e)=>{setSelectedCourse(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal">
    {
      CourseName.map((e,i)=>(
      <MenuItem key={i} value={e}>{e}</MenuItem>)
      )}</TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Section</Typography>
  <TextField select label="Select Section" onChange={(e)=>{setSelectedSection(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal">
    {
      Section.map((e,i)=>(
      <MenuItem key={i} value={e}>{e}</MenuItem>)
      )}</TextField>
  </Box>
    <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography type="text" sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Email</Typography>
  <TextField placeholder="e.g abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-164px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Password</Typography>
  <TextField type="password" onChange={(e)=>{setPassword(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Contact</Typography>
  <TextField type="text" onChange={(e)=>{setContact(e.target.value)}} placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>CNIC</Typography>
  <TextField type="text" onChange={(e)=>{setStudentNic(e.target.value)}} placeholder="xxxxx-xxxxxxx-x" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography type="text" sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's Name</Typography>
  <TextField placeholder="e.g Mohammad Zafar" onChange={(e)=>{setFather_Name(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's CNIC</Typography>
  <TextField type="text" onChange={(e)=>{setFather_Cnic(e.target.value)}} placeholder="xxxxx-xxxxxxx-x" sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Father's Contact</Typography>
  <TextField type="text" onChange={(e)=>{setF_contact(e.target.value)}} placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Emergency Contact</Typography>
  <TextField type="text" onChange={(e)=>{setE_contact(e.target.value)}} placeholder="03xx-xxxxxxx"  sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"60px",padding:"30px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Date Of Birth</Typography>
  <TextField type="date" placeholder="03xx-xxxxxxx" onChange={(e)=>{GenerateAge(e.target.value)}} sx={{width:"300px",marginTop:"10px"}}size="normal"></TextField>
  </Box>
  <Box sx={{marginLeft:"550px",padding:"30px",marginTop:"-163px"}}>
  <Typography sx={{fontFamily: '"Times New Roman", Times, serif',fontSize:"1.6em",color:"#36454F"}}>Age</Typography>
  <TextField type="text" disabled  sx={{width:"300px",marginTop:"10px"}}size="normal" label={Age}/>
  </Box>
  <Box>
  <Button  onClick={()=>{Submit()}} sx={{marginTop:"24px",marginLeft:"410px",width:"149px",height:"50px"}} variant="contained">{loader?<CircularProgress/>:"Submit"}
  </Button>
  </Box>
</Box>
{Pop ?<Box>
<div style={{ position:"fixed",top:"0",left:"0",width:"100%",height:"100vh",backgroundColor:"rgba(0,0,0,0.2)",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div style={{position: "relative",padding:"37px",width: "100%",maxWidth: "640px",backgroundColor: "#fff"}}>
  <button  style={{position: "absolute",top: "15px",right:"16px"}} onClick={()=>{
    SetPop(false)
    if(Msg=="User Successfully Created"){
      navigate("/StudentLoginScreen")}
    }}>X</button>
  <h1>{Msg}</h1>
</div>
</div>
</Box>:""
}      </Box>
    </div>
  )
}
