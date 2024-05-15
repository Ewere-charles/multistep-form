import React, { useState } from 'react';
import UserPage from "./UserPage";
import PlanPage from "./PlanPage";
import AddOns from "./Addons";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './Summary';
import Confirm from './Confirm';

function App() {
  const [toggle, setToggle] = useState(false);
  const [addOnsPrice, setAddOnsPrice] = useState(0); // Initialize total addon price to 0
  const [planName, setPlanName] = useState({ name: '', amount: 0 });
  const [addItems, setAddItems] = useState([]);

  const slideVariants = { 
    slideOut : { x : -200},
    slideIn : {x : 200}
}

  return (
    <div className="w-full light-blue min-h-screen h-auto flex items-center justify-center lg:shadow-2xl lg:shadow-slate-700">

      <Router>
        <Routes>
          <Route path="/" element={<UserPage slideVariants={slideVariants}/>} />
          <Route
            path="/plan"
            element={
              <PlanPage
                toggle={toggle}
                setToggle={setToggle}
                setAddOnsPrice={setAddOnsPrice}
                setPlanName={setPlanName}
                planName={planName}
              />
            }
          />
          <Route
            path="/addons"
            element={<AddOns toggle={toggle} setAddOnsPrice={setAddOnsPrice} setAddItems={setAddItems} addItems={addItems} />}
          />
          <Route 
            path="/summary"
            element={ <Summary planName={planName} addOnsPrice={addOnsPrice} toggle={toggle} addItems={addItems} />}
          />
          <Route 
            path="/confirm"
            element={ <Confirm />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;