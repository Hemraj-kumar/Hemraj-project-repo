import React from "react";
import Particles from  "react-tsparticles"
import particlesConfig from "./config/particles-config"
const particlesBack = () => {
    return(
        <Particles params={particlesConfig}>
        </Particles>
    )
}
 export default particlesBack