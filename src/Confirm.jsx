import Navigate from "./Navigate";
import success from "./images/icon-thank-you.svg";
import { motion } from "framer-motion";

function Confirm({isDesktopOrLaptop}){

    return(
        <motion.div 
        initial={isDesktopOrLaptop ? {x:200} : {}}
        whileInView={isDesktopOrLaptop ? {x:0} : {}}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-full lg:max-w-[900px] h-auto min-h-screen lg:h-[560px] lg:min-h-0 lg:rounded-xl flex flex-col lg:flex-row justify-start items-center lg:p-4 lg:gap-[40px] bg-white"
        >
            <Navigate number={4}/>
            <div className="lg:w-[550px] w-full bg-slate-100 flex-1 relative z-20 lg:bg-inherit h-full flex items-start justify-center"> 
                <div className="w-[90%] max-w-[550px] flex flex-col justify-start lg:h-full lg:justify-center items-center gap-4  bg-white h-auto px-5 py-[35px] rounded-lg lg:transform-none transform -translate-y-[80px]">
                    <motion.img 
                        src={success} 
                        alt="" 
                        initial={{ scale: 0 }} // Initial scale of 0 to create an entrance animation
                        animate={{ scale: 1 }} // Animation to scale up to 1
                        transition={{ type: "spring", stiffness: 200, damping: 10 }} // Spring animation
                    />
                    <h2 className="font-bold text-[25px] sm:text-[32px] lg:text-[38px] marine-purple-text">Thank you!</h2>
                    <p className="text-center text-cool-grey sm:text-[20px]">Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at ewerecharles665@gmail.com.</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Confirm;
