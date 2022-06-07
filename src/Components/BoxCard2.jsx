import * as React from 'react';
import Box from '@mui/material/Box';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SimplePaper2() {
  return (
      <div>
    <div style={{textAlign:"center",}} >
      <CardContent >
        <Typography sx={{ fontSize: 24 ,marginBottom:"2%" ,color:"white",mt:"3%"}}  >
         Work Process
        </Typography>
        <Typography sx={{color:"white"}}>
            Aenean nec tempor menus. Maecenas ligula dolor. commodo in imperdied <br/> interdum vehicula  ut ex Donec ante diam
        </Typography>
      </CardContent>
    </div>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:2,
          ml:"3.5%",
          marginBottom:"5%",
          width: 150,
          height: 250,
        },
      }}
    >
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>
        <div style={{backgroundColor:"white",boxShadow:"1px 5px 10px black",borderRadius:"10px",textAlign:"center"}}>
            <div style={{borderRadius:"100px",backgroundColor:"#8162EE",display:"inline-block",marginTop:"5px"}}><AirplaneTicketIcon sx={{fontSize:"70px",padding:"5px",color:"white"}}/></div>
            <div style={{marginTop:"20px"}}><b>Get ideas</b></div>
            <div style={{marginTop:"30px",color:"gray"}}>Lorem ipsum  <br/> elit. Amet, <br/> tecto.</div>
        </div>

    </Box>
        </div>
  );
}
