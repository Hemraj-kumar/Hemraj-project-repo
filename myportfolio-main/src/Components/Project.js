import React from "react";
import '../Components/projects.css';
function Project(){
    return(
        <div className="pros">
            {/* <LinearProgress color="orange"/> */}
            <p style={{color:"orange",textAlign:"center",fontWeight:"bold",fontSize:"30px",marginTop:"150px",
            marginLeft:"50px"}}>PROJECTS</p>
            <br/><br/><br/>
                <div className="imgspace">
                    <div className="pro1" style={{color:"black",height:"550px",width:"450px",backgroundColor:"orange"}}>
                        <img src={process.env.PUBLIC_URL+"/job.png"} alt="" style={{marginLeft:"auto",marginRight:"auto",display:"block"}}/>
                        <p style={{color:"black",backgroundColor:"orange",textAlign:"center",fontWeight:"bold"}}>Job Portal</p>
                        A Portal of system where recruiters can post the available jobs in their
                        respective companies, and Applicants could apply for the respective roles
                        and apply for jobs.
                    </div>
                    <div className="pro1" style={{color:"black",height:"550px",width:"450px",backgroundColor:"orange"}}>
                        <img src={process.env.PUBLIC_URL+"/chat.png"} alt="" style={{marginLeft:"auto",marginRight:"auto",display:"block",maxWidth:"350px"}}/>
                        <br/><br/>
                        <p style={{color:"black",backgroundColor:"orange",textAlign:"center",fontWeight:"bold"}}>Chatbots</p>
                         A chatbot made using python,where it interacts with us for shorter
                         and longer responses and can tell us how much percentage of words
                         match for the question and answer that was given as response.
                    </div>
                    <div className="pro1" style={{color:"black",height:"550px",width:"450px",backgroundColor:"orange"}}>
                        <img src={process.env.PUBLIC_URL+"/sps.png"} alt="" style={{marginLeft:"auto",marginRight:"auto",display:"block",maxWidth:"350px"}}/>
                        <br/><br/>
                        <p style={{color:"black",backgroundColor:"orange",textAlign:"center",fontWeight:"bold"}}>SPS</p>
                         A Stone Paper scissor game (You Vs Sys).Which interacts with us
                         and plays and it has certain rounds to win the game and to make it
                         an progress 2-player mode is being processed..
                    </div>
                </div>
        </div>
    );
}
export default Project