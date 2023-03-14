import React from "react";
import '../Components/Navcss.css';
import {useNavigate} from 'react-router-dom';
export default function Nav(){
    const navigate=useNavigate();
    return(
        <div className='nav'>
                <ul style={{display:"inline-flex",listStyleType:"none",color:"white"}}>
                    <button onClick={()=>navigate("/")} className="glow-on-hover"><span>Home</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>navigate("/about")} className="glow-on-hover"><span>About</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>navigate("/skills")} className="glow-on-hover"><span>Skills</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>navigate("/contact")} className="glow-on-hover"><span>Contact</span></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
        </div>
    );
}