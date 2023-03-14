import React from "react";
import '../Components/About.css';
import Nav from "./Nav";
export default function About(){
    return(
        <div id="About">
                    <div className="navigation">
                        <Nav/>
                    </div>
                    {/* <div style={{height:"10px",width:"100%",backgroundColor:"orange",marginTop:"50px"}}></div> */}
                    <img src={process.env.PUBLIC_URL+"/q.jpg"} alt="" className="who"/>
                    <div id="context">
                        <p style={{color:"black",backgroundColor:"orange",textAlign:"center",fontWeight:"bold",}}>Know About Me</p>
                        Hey, I am an Full Stack Developer and Programmer
                        Based in India. I am highly Interested in Web Desgining
                        and good at using js libraries like React.I am also
                        good at Programming, using languages like Java,C,Python.
                    </div>
                    <div id="intrest">
                                <p style={{backgroundColor:"orange",color:"black",paddingTop:"1px",textAlign:"center",fontWeight:"bold"}}>Area of Interest</p>
                                <div>
                                    <ul  style={{backgroundColor:"orange"}}>
                                        <li style={{backgroundColor:"orange",color:"black"}}>Webpage Desgining</li>
                                        <li style={{backgroundColor:"orange",color:"black"}}>Operating System</li>
                                        <li style={{backgroundColor:"orange",color:"black"}}>BCI</li>
                                        <li style={{backgroundColor:"orange",color:"black"}}>WebSite Development</li>
                                    </ul>
                                </div>
                    </div>
                    {/* <div style={{height:"10px",width:"100%",backgroundColor:"orange",marginTop:"600px"}}></div> */}

        </div>
    );
}