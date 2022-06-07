import * as React from 'react';
import Box from '@mui/material/Box';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function SimplePaper() {
  return (
      <div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:2,
          ml:"6.5%",
          width: 300,
          height: 250,
        },
      }}
    >
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><PeopleOutlineIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Modern Strategy</b></div>
            <div style={{marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Amet, architecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><PeopleOutlineIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Modern Strategy</b></div>
            <div style={{marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Amet, architecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><PeopleOutlineIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Modern Strategy</b></div>
            <div style={{marginTop:"30px"}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Amet, architecto.</div>
        </div>
    </Box>
        </div>
  );
}
