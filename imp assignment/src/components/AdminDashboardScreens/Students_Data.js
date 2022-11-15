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
import { useState , useEffect } from 'react';
import { GetData } from '../../config/firebasemethods';


export default function Students_Data() {
  const[Data,SetData] = useState([])
  const[Headings,SetHeadings]=useState(['Age', 'Contact', 'Course', 'Date_Of_Birth', 'Email', 'Emergency_Contact', 'Father_Contact', 'Father_Name', 'Father_Nic', 'First_Name', 'Last_Name', 'Nic', 'Password', 'Registered_Date', 'Roll_Number', 'Section', 'User_Id'])
  const[D,SetD]=useState([])
  const params= useParams();
  const [id,setid]=useState(params.id)
let  receiveData=()=>{GetData(`Users`).then((suc)=>{
    SetData(Object.values(suc))
       })
    .catch((err)=>{
        console.log(err)})}
        useEffect(()=>{
            receiveData();
        },[])
    console.log(Data)
        return (
    <Box sx={{marginTop: 13,marginLeft:30,position:"absolute"}}>
      <Typography variant="h3" sx={{textAlign:"center",marginLeft:"300px",marginTop:"1px",color:"red",fontFamily: '"Times New Roman", Times, serif',fontWeight:"bold"}}>All Registered Students</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>S.no</TableCell>
            {Headings.map((e,i)=>(
            <TableCell align="right">{e}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
            {Data.map((e,i)=>{
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{i}</TableCell>
                {Object.values(e).map((a,k)=>{
                    {console.log(a)}
                    <TableCell align="right">{a}</TableCell>
                })}
            </TableRow>
            })}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
