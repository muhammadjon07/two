import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{maxWidth:"100%", width:"70%" ,height:"10%", minHeight:300,maxHeight:300, minWidth: 275 ,display:"inline-block",textAlign:"center",marginTop:"10%",marginLeft:"13%", background:"none",color:"white",boxShadow:"none" }} >
      <CardContent>
        <Typography sx={{ fontSize: 24 ,marginBottom:"2%" ,color:"white"}}  gutterBottom>
          We provide the Best <b>Strategy</b><br/>
          To grow up your <b>Bussines</b>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          Softy pinko is a Proffesional Bootstrap 4.0 theme Designed by Template Mo
          <br />
          {'for you company at absolutely free of charge'}
        </Typography>
        <Typography>
            <CardActions sx={{backgroundColor:"#FE599E",display:"inline-block",borderRadius:"100px",marginTop:"6%",padding:"0px"}}>
        <Button size="small" sx={{padding:"10px 35px 10px 35px",backgroundColor:"#FE599E",color:"white",borderRadius:"100px"}} >Discover ME</Button>
      </CardActions>
        </Typography>
      </CardContent>
    </Card>
  );
}
