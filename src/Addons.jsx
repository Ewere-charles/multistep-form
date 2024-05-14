import React, { useState } from 'react';
import Navigate from "./Navigate.jsx";
import { Link } from 'react-router-dom';

function AddOns({ toggle, setAddOnsPrice, setAddItems, addItems }) {
    const [add, setAdd] = useState(false);
    const [large, setLarge] = useState(false);
    const [custom, setCustom] = useState(false);

    const handleAdd = (e, number) => {
        e.preventDefault();
        let price = 0;
        let newItem = {};
        switch (number) {
            case 1:
                setAdd(!add);
                price = add ? (toggle ? -10 : -1) : (toggle ? 10 : 1); // Adjust price based on selection/deselection

                //Checking if the item is already found in the array called addItems
                const serviceItem = {name : 'Online service', price : (toggle ? 10 : 1)};
                const serviceFound = addItems.some(item => item.name === serviceItem.name && item.price === serviceItem.price);
                if(serviceFound){
                    const serviceUpdatedAddItems = addItems.filter(item => !(item.name === serviceItem.name && item.price === serviceItem.price));
                    setAddItems(serviceUpdatedAddItems);
                }else{
                    newItem = {name : serviceItem.name, price : serviceItem.price};
                    setAddItems(prevItems => [...prevItems, newItem]);
                }

                break;
            case 2:
                setLarge(!large);
                price = large ? (toggle ? -20 : -2) : (toggle ? 20 : 2);

                //Checking if the item is already found in the array called addItems
                const largeItem = {name : 'Large storage', price : (toggle ? 20 : 2)};
                const largeFound = addItems.some(item => item.name === largeItem.name && item.price === largeItem.price);
                if(largeFound){
                    const largeUpdatedAddItems = addItems.filter(item => !(item.name === largeItem.name && item.price === largeItem.price));
                    setAddItems(largeUpdatedAddItems);
                }else{
                    
                    newItem = {name : largeItem.name, price : largeItem.price};
                    setAddItems(prevItems => [...prevItems, newItem]);
                }

                break;
            case 3:
                setCustom(!custom);
                price = custom ? (toggle ? -20 : -2) : (toggle ? 20 : 2);

                //Checking if the item is already found in the array called addItems
                const customItem = {name : 'Customizable profile', price : (toggle ? 20 : 2)};
                const customFound = addItems.some(item => item.name === customItem.name && item.price === customItem.price);
                if(customFound){
                    const customUpdatedAddItems = addItems.filter(item => !(item.name === customItem.name && item.price === customItem.price));
                    setAddItems(customUpdatedAddItems);
                }else{
                    newItem = {name : customItem.name, price : customItem.price};
                    setAddItems(prevItems => [...prevItems, newItem]);
                }

                break;
            default:
                price = 0;
        }
        setAddOnsPrice(prevPrice => prevPrice + price); // Update total price
    };



    return(
        <div className="w-full lg:max-w-[900px] h-auto min-h-screen lg:h-[560px] lg:min-h-0 lg:rounded-xl flex flex-col lg:flex-row justify-start items-center lg:p-4 lg:gap-[40px] bg-white">
            <Navigate number={3}/>
            <div className=" lg:w-[550px] w-full flex flex-col gap-5 lg:gap-0 items-center justify-start lg:justify-between pb-5 lg:h-full relative z-20" >
            <div className="bg-slate-200 lg:bg-inherit h-auto w-full flex items-start justify-center"> 
            <form className="w-[90%] max-w-[550px] flex flex-col justify-start items-start gap-5 lg:gap-10  bg-white h-auto px-5 py-[35px] rounded-lg lg:transform-none transform -translate-y-[80px]">
                <div>
                    <h1 className="text-[25px] font-extrabold marine-purple-text">Pick add-ons</h1>
                    <p className=" text-cool-grey">Add-ons help enhance your gaming experience</p>
                </div>

                <div className="w-full flex flex-col items-center justify-start gap-5">

                        {/* First label */}
                        <label className={`p-3 w-full flex items-center justify-between rounded-lg border-[1px]  ${add? 'mpb' : 'border-slate-200'}`} htmlFor="service" onClick={(e) => handleAdd(e, 1)}>
                        <div className="flex items-center justify-start gap-4">
                            <input type="checkbox" name="service" id="service" checked={add} className={`h-5 w-5 apb pointer-events-none ${add? 'opacity-100' : 'opacity-30'}`}/>
                            <div>
                                <h2 className="marine-purple-text text-[17px] font-semibold">Online service</h2>
                                <p className="text-cool-grey text-[13px]">Access to multiplayer games</p>
                            </div>
                        </div>

                        <span className='purplish-blue text-[14px]'>{toggle? '+$10/yr' : '+$1/mo'}</span>

                        </label>


                        {/* Second label */}
                        <label className={`p-3 w-full flex items-center justify-between rounded-lg border-[1px]  ${large? 'mpb' : ' border-slate-200'}`} htmlFor="service" onClick={(e) => handleAdd(e, 2)}>
                        <div className="flex items-center justify-start gap-4">
                            <input type="checkbox" name="service" id="service" checked={large} className={`h-5 w-5 apb pointer-events-none ${large? 'opacity-100' : 'opacity-30'}`}/>
                            <div>
                                <h2 className="marine-purple-text text-[17px] font-semibold">Larger storage</h2>
                                <p className="text-cool-grey text-[13px]">Extra 1TB of cloude save</p>
                            </div>
                        </div>

                        <span className='purplish-blue text-[14px]'>{toggle? '+$20/yr' : '+$2/mo'}</span>

                        </label>


                        {/* Third label */}
                        <label className={`p-3 w-full flex items-center justify-between rounded-lg border-[1px] ${custom? 'mpb' : 'border-slate-200'}`} htmlFor="service" onClick={(e) => handleAdd(e, 3)}>
                        <div className="flex items-center justify-start gap-4">
                            <input type="checkbox" name="service" id="service" checked={custom} className={`h-5 w-5 apb pointer-events-none ${custom? 'opacity-100' : 'opacity-30'}`}/>
                            <div>
                                <h2 className="marine-purple-text text-[17px] font-semibold">Customizable profile</h2>
                                <p className="text-cool-grey text-[13px]">Customize theme on your profile</p>
                            </div>
                        </div>

                        <span className='purplish-blue text-[14px]'>{toggle? '+$20/yr' : '+$2/mo'}</span>

                        </label>

                </div>

                </form>
            </div>
            <div className="w-[90%] md:max-w-[550px] lg:px-5  flex items-center justify-between lg:mt-10">
                <Link to={'/plan'}>
                    <button className='marine-purple-text font-semibold'>Go back</button>
                </Link>
                
                <Link to={'/summary'}>
                    <button
                        className="marine-purple light-grey-text font-bold px-4 h-10 rounded-[5px]"
                    >Next Step</button>
                </Link>
             </div>
            </div>

        </div>
    )
}

export default AddOns