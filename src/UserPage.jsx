import Navigate from "./Navigate.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function UserPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nameControl, setNameControl] = useState(false); // Initialize to false
    const [emailControl, setEmailControl] = useState(false); // Initialize to false
    const [phoneControl, setPhoneControl] = useState(false); // Initialize to false
    const [emailValidation, setEmailValidation] = useState(false); // Initialize to false
    const [showRequiredMessage, setShowRequiredMessage] = useState(false); // State to control when to show required message
    const navigate = useNavigate();

    function handleName(e) {
        const userName = e.target.value;
        setName(userName);
        setNameControl(userName.trim() === ''); // Update control state
    }

    function handleEmail(e) {
        const userEmail = e.target.value;
        setEmail(userEmail);
        setEmailControl(userEmail.trim() === ''); // Update control state
    }

    function handlePhone(e) {
        const userPhone = e.target.value;
        setPhone(userPhone);
        setPhoneControl(userPhone.trim() === ''); // Update control state
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        // Email validation
        setEmailValidation(!email.includes('@'));
    
        // Check if all fields are filled
        if (!name.trim() || !email.trim() || !phone.trim() || emailValidation) {
            // If any field is empty or email is invalid, set control states to show error messages
            setNameControl(!name.trim());
            setEmailControl(!email.trim());
            setPhoneControl(!phone.trim());
            setShowRequiredMessage(true); // Show required message
        } else {
            // If all fields are filled and email is valid, navigate to the next step
            navigate('/plan'); // Change '/next-page' to the actual route
        }
    }



    return(
        <motion.div 
        initial={{x:200}}
        whileInView={{x:0}}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="w-full lg:max-w-[900px] h-auto min-h-screen lg:h-[560px] lg:min-h-0 lg:rounded-xl flex flex-col lg:flex-row justify-start items-center lg:p-4 lg:gap-[40px] bg-white">
            <Navigate number={1}/>
            <div className=" lg:w-[550px] w-full flex flex-col gap-5 items-center justify-start pb-5 lg:h-full relative z-20" >
            <div className="bg-slate-200 lg:bg-inherit h-auto w-full flex items-start justify-center"> 
            <form className="w-[90%] max-w-[550px] flex flex-col justify-start items-start gap-5  bg-white h-auto px-5 py-[35px] rounded-lg lg:transform-none transform -translate-y-[80px]">
                <div className="lg:mb-2">
                    <h1 className="marine-purple-text text-[32px] font-[700] mb-2 lg:mb-0">Personal Info</h1>
                    <p className="text-cool-grey text-[16px]">please provide your name, email address, and phone number.</p>
                </div>

                <div className="w-full flex flex-col items-start justify-start">
                    <label className=" mb-[5px] flex items-center justify-between w-full">
                        <span className="marine-purple-text font-[550]">Name</span> 
                        <span className={`strawberry font-semibold ${nameControl? 'block' : 'hidden'}`}>This field is require</span>
                    </label>
                        <input 
                        type="text"
                        value={name}
                        onChange={(e) => handleName(e)}
                        placeholder="e.g Stephen King"
                        className={` ${nameControl? 'sbo sbout' : 'border-slate-300 outline-slate-600'} border-[1px] h-10 sm:h-12 w-full outline-[1px]  px-2 font-semibold text-slate-500 rounded`} />
                </div>
                
                <div className="w-full flex flex-col items-start justify-start">
                    <label className=" mb-[5px] flex items-center justify-between w-full">
                        <span className="marine-purple-text font-[550]">Email</span> 
                        <span className={`strawberry font-semibold ${emailControl? 'block' : 'hidden'} ${emailValidation? 'hidden' : ''}`}>This field is require</span>
                        <span className={`strawberry font-semibold ${emailValidation? 'block' : 'hidden'}`}>Enter a Valid mail (@)</span>
                    </label>
                        <input 
                        type="Email"
                        value={email}
                        onChange={(e) => handleEmail(e)}
                        placeholder="e.g StephaneKing@lorem.com"
                        className={` ${emailControl? 'sbo sbout' : 'border-slate-300 outline-slate-600'} border-[1px] h-10 sm:h-12 w-full outline-[1px]  px-2 font-semibold text-slate-500 rounded`} />
                </div>
                
                <div className="w-full flex flex-col items-start justify-start">
                    <label className="mb-[5px] flex items-center justify-between w-full">
                        <span className="marine-purple-text font-[550]">Phone Number</span>
                        <span className={`strawberry font-semibold ${phoneControl? 'block' : 'hidden'}`}>This field is require</span></label>
                        <input 
                        type="number"
                        value={phone}
                        onChange={(e) => handlePhone(e)}
                        placeholder="e.g +1234567890"
                        className={` ${phoneControl? 'sbo sbout' : 'border-slate-300 outline-slate-600'} border-[1px] h-10 sm:h-12 w-full outline-[1px]  px-2 font-semibold text-slate-500 rounded`}/>
                </div>
            </form>
            </div>
            <div className="w-[90%] md:max-w-[550px] flex items-center justify-end px-5">
            <motion.button
                    className="marine-purple magnolia font-[550] px-4 h-10 rounded"
                    onClick={(e) => handleSubmit(e)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    Next Step
                </motion.button>

        </div>
            </div>

        </motion.div>
    )
}

export default UserPage