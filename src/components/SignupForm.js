import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({setLoggedIn}){

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        firstname:"",lastname:"", email:"", password:"", confirmPassword:"",
    })

    const [CreateShowPassword, setCreateShowPassword] = useState(false);
    const [ConfirmShowPassword, setConfirmShowPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event){
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name] : event.target.value
        }))
    }


    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match")
        }else{
            setLoggedIn(true);
            toast.success("Account Created");
            const accountData = {formData};

            const finalData = {...accountData, accountType}
            console.log("Printing final account data");
            console.log(finalData);
            navigate("/dashboard");
        }
    }

    return(

        <div>
            {/* Student/ instructor tab */}

            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max mb-1">
                <button className={`${accountType === "student" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType === "instructor" ? ("bg-richblack-900 text-richblack-5") : ("bg-transparent text-richblack-200")} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            {/* Actual Form starts */}

            <form onSubmit={submitHandler}>
            {/* First name and last name contain */}
                <div className="flex gap-x-4 mt-4">
                    <label className="w-full">
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">First Name <sup className="text-pink-200">*</sup> </p>
                        <input
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        value={formData.firstname}
                        className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Last Name <sup className="text-pink-200">*</sup> </p>
                        <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter last name"
                        value={formData.lastname}
                        className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
                        />
                    </label>
                </div>
            
            {/* Email address */}
                <div className="w-full mt-4">
                    <label>
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">Email Address<sup className="text-pink-200">*</sup> </p>
                        <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email address"
                        value={formData.email}
                        className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
                        />
                    </label>
                </div>

            {/*Create Password section */}
                <div className="flex gap-x-4 mt-4">
                    <label className="relative w-full">
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
                            Create Password<sup className="text-pink-200">*</sup> 
                        </p>
                        <input
                        required
                        type={CreateShowPassword ? ("text") : ("password")}
                        onChange={changeHandler}
                        name="password"
                        value={formData.password}
                        placeholder="Enter Password"
                        className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
                        />
                        <span onClick={() => setCreateShowPassword(!CreateShowPassword)}
                        className="absolute right-3 top-[38px] cursor-pointer text-[25px] text-[#afb2af]">
                            {CreateShowPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>

                    <label className="relative w-full">
                        <p className="text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem]">
                            Confirm Password<sup className="text-pink-200">*</sup> 
                        </p>
                        <input
                        type={ConfirmShowPassword ? ("text") : ("password")}
                        onChange={changeHandler}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm Password"
                        className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px] border-b-[1px] border-richblack-200"
                        />
                        <span onClick={() => setConfirmShowPassword(!ConfirmShowPassword)}
                        className="absolute right-3 top-[38px] cursor-pointer text-[25px] text-[#afb2af]">
                            {ConfirmShowPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                    </label>
                </div>

            {/* Create Password */}

                <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 py-[8px] px-[12px] mt-10">
                    Create Account
                </button>
            </form>
        </div>


    );




}

export default SignupForm;