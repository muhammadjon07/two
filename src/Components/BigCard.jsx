import * as React from "react";
import Box from "@mui/material/Box";
import HelpIcon from "@mui/icons-material/Help";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ForumIcon from '@mui/icons-material/Forum';
export default function Coments() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap:"wrap",
          "& > :not(style)": {
            m: 10,
          },
        }}
      >
        <ForumIcon
          style={{ fontSize: "45vh", border: "none", color: "#8162EE",ml:"-5%" }}
        />
        <div style={{display:"inline-block"}}>
          <h1>Let`s discus about our project</h1>
          <h4 style={{ color: "grey", }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br/>
            sequi velit consequatur maiores? Vero aspernatur, quidem dolor rerum <br/>
            deleniti provident minus nulla a voluptas uo suscipit deserunt <br/>
            impedit accusamus fuga. Odit ipsam doloribus neque officia adipisci <br/>
            perspiciatis fuga, hic atque? <br/>
          </h4>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap:"wrap",
          "& > :not(style)": {
            m: 10,
          },
        }}
      >
        <div>
          <h1>We can help you to grow up your bisnes </h1>
          <h4 style={{ color: "grey", }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere <br/>
            sequi velit consequatur maiores? Vero aspernatur, quidem dolor rerum <br/>
            deleniti provident minus nulla a voluptas quo suscipit deserunt <br/>
            impedit accusamus fuga. Odit ipsam doloribus neque officia adipisci <br/>
            perspiciatis fuga, hic atque? <br/>
          </h4>
        </div>
        <AccessibilityIcon
          style={{ fontSize: "45vh", border: "none", color: "#8162EE" }}
        />
      </Box>
    </div>
  );
}