import Navigate from "./Navigate";
import { Link } from 'react-router-dom'

function Summary({planName, addOnsPrice, toggle, addItems}){

    return(
        <div className="w-full lg:max-w-[900px] h-auto min-h-screen lg:h-[560px] lg:min-h-0 lg:rounded-xl flex flex-col lg:flex-row justify-start items-center lg:p-4 lg:gap-[40px] bg-white">
        <Navigate number={4}/>
        <div className=" lg:w-[550px] w-full flex flex-col gap-5 items-center justify-start pb-5 lg:h-full relative z-20" >
        <div className="bg-slate-200 lg:bg-inherit h-auto w-full flex items-start justify-center"> 

        <form className="w-[90%] max-w-[550px] flex flex-col justify-start items-start gap-5  bg-white h-auto px-5 py-[35px] rounded-lg lg:transform-none transform -translate-y-[80px]">
                <div>
                    <h1 className="text-[25px] font-extrabold marine-purple-text">Finishing up</h1>
                    <p className=" text-cool-grey ">Double-check everything looks OK before confirming.</p>
                </div>


            {/* summary */}
            <div className="w-full">

                <div className="p-4 border-b-2 w-full flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-[18px] marine-purple-text">{planName.name} {`(${toggle ? 'Yearly' : 'Monthly'})`}</h2>
                        <Link to={'/plan'}>
                        <p className="text-neutral-400 underline cursor-pointer hover:text-blue-900">Change</p>
                        </Link>
                    </div>
                    <span className="font-semibold text-[18px] marine-purple-text">{`$${planName.amount}/${toggle? 'yr' : 'mo'}`}</span>
                </div>

                {
                    addItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3">
                             <p className="text-cool-grey">{item.name}</p>
                             <p className="marine-purple-text">{`+$${item.price}/${toggle? 'yr' : 'mo'}`}</p>
                        </div>
                    ))
                }

                <div className="flex items-center justify-between p-3 text-[18px]">
                    <p className="text-cool-grey">{`Total (per ${toggle ? 'year' : 'month'})`}</p>
                    <span className="font-semibold purplish-blue">{`+$${addOnsPrice}/${toggle ? 'yr' : 'mo'}`}</span>
                </div>

            </div>

        </form>
        </div>

        <div className="w-[90%] md:max-w-[550px] lg:px-5  flex items-center justify-end lg:mt-10">
                
                <Link to={'/confirm'}>
                    <button
                        className="purplish-blue-bg light-grey-text font-bold px-4 h-10 rounded-[5px]"
                    >Confirm</button>
                </Link>
             </div>
        </div>

    </div>
    );
}

export default Summary