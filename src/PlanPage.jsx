import React, { useState, useEffect } from "react";
import Navigate from "./Navigate.jsx";
import arcade from "./images/icon-arcade.svg";
import advance from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function PlanPage({ toggle, setToggle, setAddOnsPrice, setPlanName, planName, isDesktopOrLaptop}) {
    const [plan, setPlan] = useState(1);

    useEffect(() => {
        // Update addOnsPrice when toggle changes
        let price;
        let name;
        let mainPlan = {};
        switch (plan) {
            case 1:
                price = toggle ? 90 : 9;
                name = 'Arcade';
                mainPlan = { name: name, amount: price };
                break;
            case 2:
                price = toggle ? 120 : 12;
                name = 'Advance'
                mainPlan = { name: name, amount: price };
                break;
            case 3:
                price = toggle ? 150 : 15;
                name = 'Pro';
                mainPlan = { name: name, amount: price };
                break;
            default:
                price = 0;
        }
        setAddOnsPrice(price);
        setPlanName(mainPlan); // <-- Update planName state with the mainPlan object
    }, [toggle, plan, setAddOnsPrice, setPlanName]);
    

    const handleClick = (e, number) => {
        e.preventDefault();
        setPlan(number);
    };

    function handleToggle(){
        setToggle(prevToggle => !prevToggle);
    }

    return(
        <motion.div 
        initial={isDesktopOrLaptop ? {x:200} : {}}
            whileInView={isDesktopOrLaptop ? {x:0} : {}}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="w-full lg:max-w-[900px] h-auto min-h-screen lg:h-[560px] lg:min-h-0 lg:rounded-xl flex flex-col lg:flex-row justify-start items-center lg:p-4 lg:gap-[40px] bg-white">
            <Navigate number={2}/>
            <div className=" lg:w-[550px] w-full flex flex-col gap-5  items-center justify-start pb-5 lg:h-full relative z-20" >
            <div className="bg-slate-200 lg:bg-inherit h-auto w-full flex items-start justify-center"> 
            <form className="w-[90%] max-w-[550px] flex flex-col justify-start items-start gap-5 lg:gap-10  bg-white h-auto px-5 py-[35px] rounded-lg lg:transform-none transform -translate-y-[80px]">
                <div>
                    <h1 className="text-[25px] font-extrabold marine-purple-text">Select your plan</h1>
                    <p className="text-cool-grey">You have the option monthly or yearly billing.</p>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5 h-auto">
                <div   className={`cursor-pointer w-full p-5 flex lg:flex-col lg:items-start gap-5 lg:gap-10 items-center justify-start rounded-lg ${plan === 1 ? 'border-2 border-slate-500' : 'border-[1px] border-slate-200'}`} onClick={(e)=> handleClick(e, 1)}>
                    <img src={arcade} alt="" />
                    <div>
                        <h2 className="planName marine-purple-text font-bold text-[18px]">Arcade</h2>
                        <p className="text-cool-grey text-[14px]">{toggle ? '$90/yr' : '$9/mo'}</p> 
                        <p className={`marine-purple-text text-[12px] font-semibold tracking-wider ${toggle ? 'block' : 'hidden'}`}>2 Months free</p>
                    </div>
                </div>
                
                <div   className={`cursor-pointer w-full p-5 flex lg:flex-col lg:items-start gap-5 lg:gap-10 items-center justify-start rounded-lg ${plan === 2 ? 'border-2 border-slate-500' : 'border-[1px] border-slate-200'}`} onClick={(e)=> handleClick(e, 2)}>
                    <img src={advance} alt="" />
                    <div>
                        <h2 className="planName marine-purple-text font-bold text-[18px]">Advanced</h2>
                        <p className="text-cool-grey text-[14px]">{toggle ? '$120/yr' : '$12/mo'}</p>
                        <p className={`marine-purple-text text-[12px] font-semibold tracking-wider ${toggle ? 'block' : 'hidden'}`}>2 Months free</p>
                    </div>
                </div>
                
                <div   className={`cursor-pointer w-full p-5 flex lg:flex-col lg:items-start gap-5 lg:gap-10 items-center justify-start rounded-lg ${plan === 3 ? 'border-2 border-slate-500' : 'border-[1px] border-slate-200'}`} onClick={(e)=> handleClick(e, 3)}>
                    <img src={pro} alt="" />
                    <div>
                        <h2 className="planName marine-purple-text font-bold text-[18px]">Pro</h2>
                        <p className="text-cool-grey text-[14px]">{toggle ? '$150/yr' : '$15/mo'}</p>
                        <p className={`marine-purple-text text-[12px] font-semibold tracking-wider ${toggle ? 'block' : 'hidden'}`}>2 Months free</p>
                    </div>
                </div>
                </div>
                <div className="text-[12px] flex items-center justify-center gap-5 w-full">
                    <span className={`${toggle ? 'font-semibold text-slate-300' : 'font-bold text-slate-500'}`}>Monthly</span>
                        <div className={`cursor-pointer w-10 h-[20px] rounded-xl p-1 flex items-center ${toggle ? 'justify-end marine-purple' : 'justify-start border-[1.5px] mpb'}`} onClick={handleToggle}>
                            <span className={`h-[12px] w-[12px] rounded-full hover:h-[14px] hover:w-[14px] transition-all ${toggle ? ' bg-white' : 'marine-purple'}`}></span>
                        </div>
                    <span className={`${toggle ? 'font-bold text-slate-500' : 'font-semibold text-slate-300'}`}>Yearly</span>
                </div>
            </form>
            </div>
            <div className="w-[90%] md:max-w-[550px] lg:px-5  flex items-center justify-between lg:mt-10">
                <Link to={'/'}>
                    <button className='marine-purple-text font-semibold'>Go back</button>
                </Link>
                
                <Link to={'/Addons'}>
                    <motion.button
                        className="marine-purple light-grey-text font-bold px-4 h-10 rounded-[5px]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >Next Step</motion.button>
                </Link>
             </div>
            </div>

        </motion.div>
    )
}

export default PlanPage;