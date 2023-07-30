import React from "react";
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"


function Template({title, desc1, desc2, image, formtype, setLoggedIn}){


    return(
        <div className="w-11/12 mx-auto max-w-[1160px] flex justify-between py-12 gap-x-12 gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-richblack-5 font-semibold text-[2rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-100">{desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>
                {formtype === "signup" ? 
                (<SignupForm setLoggedIn = {setLoggedIn}></SignupForm>) 
                :(<LoginForm setLoggedIn ={setLoggedIn}></LoginForm>)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <p className="text-rich-black700 font-medium leading-[1.375rem] text-richblack-700">OR</p>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>

                <button className="flex w-full justify-center gap-x-3 items-center text-richblack-100 rounded-[8px] font-medium border border-richblack-100 px-[12px] py-[8px] mt-6">
                    <FcGoogle className="text-2xl"></FcGoogle>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} width={558} height={504} loading="lazy"/>
                <img src={image} width={558} height={490} loading="lazy" className="absolute -top-4 right-4"/>
            </div>
        </div>
    );


}

export default Template;