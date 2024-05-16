import React, { useState } from 'react';
import UserPage from "./UserPage";
import PlanPage from "./PlanPage";
import AddOns from "./Addons";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Confirm from './Confirm';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [toggle, setToggle] = useState(false);
  const [addOnsPrice, setAddOnsPrice] = useState(0); // Initialize total addon price to 0
  const [planName, setPlanName] = useState({ name: '', amount: 0 });
  const [addItems, setAddItems] = useState([]);

  const slideVariants = { 
    slideOut : { x : -200},
    slideIn : {x : 200}
}

const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1024 });

  return (
    <div className="w-full light-blue min-h-screen h-auto flex items-center justify-center lg:shadow-2xl lg:shadow-slate-700">

      <Router>
        <Routes>
          <Route path="/" 
          element={<UserPage
            isDesktopOrLaptop={isDesktopOrLaptop}
          />} />
          <Route
            path="/plan"
            element={
              <PlanPage
                toggle={toggle}
                setToggle={setToggle}
                setAddOnsPrice={setAddOnsPrice}
                setPlanName={setPlanName}
                planName={planName}
                isDesktopOrLaptop={isDesktopOrLaptop}
              />
            }
          />
          <Route
            path="/addons"
            element={<AddOns 
              toggle={toggle} 
              setAddOnsPrice={setAddOnsPrice} 
              setAddItems={setAddItems} 
              addItems={addItems}
              isDesktopOrLaptop={isDesktopOrLaptop}
               />}
          />
          <Route 
            path="/summary"
            element={ <Summary planName={planName}
             addOnsPrice={addOnsPrice}
              toggle={toggle}
               addItems={addItems}
                setAddItems={setAddItems}
                isDesktopOrLaptop={isDesktopOrLaptop}
               />}
          />
          <Route 
            path="/confirm"
            element={ <Confirm 
              isDesktopOrLaptop={isDesktopOrLaptop}
            />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;