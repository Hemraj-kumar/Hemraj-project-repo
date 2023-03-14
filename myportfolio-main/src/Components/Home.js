import React from 'react';
import '../Components/style.css'
import Nav from './Nav';
export default function Home(){
    return(
        <div className='header'>
            {/* <p style={{float:"left",color:"white"}} className="port">Portfolio</p> */}
            <div className='nav'>
                <Nav/>
            </div>
            <section className='images'>
                <div>
                    <p className='name' style={{color:"white"}}>
                        Hello I'm<br/>
                        Hemraj Kumar <br/>
                        <p className='prog' style={{color:"white"}}>
                            <p>Programmer</p>
                            {/* <span>Web Developer</span> */}
                        </p>
                    </p>
                    <img src={process.env.PUBLIC_URL + '/mypic.jpg'} alt="" style={{borderRadius:"12px"}}/>
                </div>
                </section>
        </div>
    );
}