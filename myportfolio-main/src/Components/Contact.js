import { Grid } from "@mui/material";
import Box from "@mui/material/Box"
import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai"
import {RxResume} from "react-icons/rx"
import '../Components/con.css';
import Nav from "./Nav";
export default function Contact(){
    return(
        <div className="contactForm">
            <Box className="division">
                <Nav/>
            </Box>
            <Box sx={{ width: '50%',flexGrow:'1',marginLeft:'500px'}}>
                <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                    <Grid xs={2} sm={3}>
                        <p style={{color:"orange",textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>Profile</p>
                            <div className="vertical">
                                <a href="https://www.linkedin.com/in/hemraj-kumar/">
                                    <BsLinkedin size={50} />
                                </a>
                                <br/><br/><br/>
                                <a href="https://github.com/Hemraj-kumar/projects">
                                    <AiFillGithub size={50}/>
                                </a>
                                <br/><br/><br/>
                                <a href="https://drive.google.com/file/d/1InqxI26gsp0aKWhHSZ3gTihwVBCLcqMx/view?usp=sharing">
                                    <RxResume size={50}/>
                                </a>
                                
                            </div>
                    </Grid>
                    <Grid xs={2} sm={3}>
                        <p style={{color:"orange",textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>Contact</p>            {/* <div style={{color:"black",height:"650px",width:"650px",backgroundColor:"orange",marginTop:"50px",marginLeft:"625px"}}> */}
                        <form method="post">
                        {/* <div> */}
                            <label style={{backgroundColor:"orange"}}>Enter Your Name :</label><br/><br/>
                            <input type="text" placeholder="Enter your name" maxLength={50} required/>
                            <br/><br/>
                            <label style={{backgroundColor:"orange"}}>Enter Your Mailid :</label> 
                            <br/><br/>
                            <input type="email" placeholder="Enter an Valid email id" required/>
                            <br/><br/>
                            <label style={{backgroundColor:"orange"}}>Enter Your Context : </label>
                            <br/><br/>
                            <input type="text" placeholder="Enter your content" required/>
                            <br/><br/><br/>
                            <button type="submit" className="sub">Submit</button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}