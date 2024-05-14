import Dbg from './images/bg-sidebar-desktop.svg';
import Mbg from './images/bg-sidebar-mobile.svg';
import React from 'react';
// import { useNavigate } from 'react-router-dom';


function Navigate({ number }) {
  // const navigate = useNavigate();
  const isFirstStep = number === 1;
  const isSecondStep = number === 2;
  const isThirdStep = number === 3;
  const isFourthStep = number === 4;

  // switch (number) {
  //     case 1: 
  //       navigate('/')
  //     break;
        
  //     case 2:
  //       navigate('/plan')
  //     break;      

  
  //   default:
  //     break;
  // }



  return (
    <div className="h-[200px] sm:h-[250px] lg:h-full lg:p-5 lg:rounded-lg w-full lg:w-[250px] relative">
            <img src={Dbg} alt="" className='absolute w-full h-full top-0 left-0 hidden lg:block object-cover lg:rounded-lg z-0' />
            <img src={Mbg} alt="" className='absolute w-full h-full top-0 left-0 lg:hidden object-cover z-0' />
      <div className="relative z-10 w-full h-full flex lg:flex-col items-start justify-center py-10 lg:py-0 lg:justify-start gap-5">
      <div className="flex items-center justify-start gap-5">
          <span
            className={` w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              isFirstStep ? 'pastel-blue marine-purple-text' : 'bg-transparent text-white border-white border-[1.5px]'
            }`}
          >
            1
          </span>
          <div className="hidden lg:block">
            <p className='text-cool-grey text-[12px]'>STEP 1</p>
            <h2 className='hidden lg:block magnolia font-semibold text-[13px] tracking-[2px]'>YOUR INFO</h2>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5">
          <span
            className={` w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              isSecondStep ? 'pastel-blue marine-purple-text' : 'bg-transparent text-white border-white border-[1.5px]'
            }`}
          >
            2
          </span>
          <div className="hidden lg:block">
            <p className='text-cool-grey text-[12px]'>STEP 2</p>
            <h2 className='hidden lg:block magnolia font-semibold text-[13px] tracking-[2px]'>SELECT PLAN</h2>
          </div>
        </div>


        <div className="flex items-center justify-start gap-5">
          <span
            className={` w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              isThirdStep ? 'pastel-blue marine-purple-text' : 'bg-transparent text-white border-white border-[1.5px]'
            }`}
          >
            3
          </span>
          <div className="hidden lg:block">
            <p className='text-cool-grey text-[12px]'>STEP 3</p>
            <h2 className='hidden lg:block magnolia font-semibold text-[13px] tracking-[2px]'>ADD-ONS</h2>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5">
          <span
            className={` w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              isFourthStep ? 'pastel-blue marine-purple-text' : 'bg-transparent text-white border-white border-[1.5px]'
            }`}
          >
            4
          </span>
          <div className="hidden lg:block">
            <p className='text-cool-grey text-[12px]'>STEP 4</p>
            <h2 className='hidden lg:block magnolia font-semibold text-[13px] tracking-[2px]'>SUMMARY</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigate