import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { GetData } from '../../config/firebasemethods';

export default function YourCourses() {
  const[name,setname] = useState("")
  const[Rollno,setRollno] = useState("")
  const[Sect,setSect] = useState("")
  const[Startdate,setStartdate] = useState("")
  const params= useParams();
  const [id,setid]=useState(params.id)

  GetData("Users",id).then((suc)=>{
    setname(suc.Course)
    setRollno(suc.Roll_Number)
    setSect(suc.Section)
    setStartdate(suc.Registered_Date)
  })
  .catch((err)=>{
    console.log(err)})  
    return (
    <Box sx={{marginTop: 17,marginLeft:30,position:"absolute"}}>
      <Typography variant="h3" sx={{marginLeft:"260px",marginTop:"6px",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold"}}>Your Registered Courses</Typography>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Roll Number</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{Rollno}</TableCell>
              <TableCell align="right">{Sect}</TableCell>
              <TableCell align="right">{Startdate}</TableCell>
              <TableCell align="right">89-89</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
