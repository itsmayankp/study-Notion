import React from "react";
import SignupImg from "../assets/signup.png"
import Template from "../components/Template";


function Signup({setLoggedIn}){

    return(
        <Template
            title= "Join the millions learning to code with StudyNotion for free"
            description = "Build skills for today, tomorrow, and beyond."
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={SignupImg}
            formtype="signup"
            setLoggedIn={setLoggedIn}
        />
    );

}

export default Signup;