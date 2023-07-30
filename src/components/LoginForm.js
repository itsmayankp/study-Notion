import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({setLoggedIn}){

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);


    function changeHandler(event){
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        setLoggedIn(true);
        toast.success("Logged In Successfully");
        console.log("Printing the formdata");
        console.log(formData);
        navigate("/dashboard");
    }



    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        {/* Email Field */}
            <label className="w-full">
                <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
            <input
            required
            type="text"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
            />
            </label>
        {/* Password Field */}

            <label className="w-full relative">
                <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>
            <input
            required
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            name="password"
            onChange={changeHandler}
            placeholder="Enter password"
            className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
            />
            <span onClick= {()=> setShowPassword(!showPassword)} className="absolute right-3 top-[38px] cursor-pointer text-[25px] text-[#afb2af]">
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <Link to="#">
                <p className="text-xs mt-1 text-blue-100 absolute right-0">Forgot Password</p>
            </Link>
            </label>

            {/* Sign In Button */}

            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-10">
                Sign In
            </button>
        </form>
    );


}


export default LoginForm;