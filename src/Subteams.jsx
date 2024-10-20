import './Subteams.css'
import TopBar from './TopBar';
import React, { useState } from "react";

function Subteams() {

  const [isActiveProp, setIsActiveProp] = useState(false);
  const toggleDropdownProp = () => {
    setIsActiveProp(!isActiveProp);
  };

  const [isActiveStruct, setIsActiveStruct] = useState(false);
  const toggleDropdownStruct = () => {
    setIsActiveStruct(!isActiveStruct);
  };

  const [isActiveElec, setIsActiveElec] = useState(false);
  const toggleDropdownElec = () => {
    setIsActiveElec(!isActiveElec);
  };

  const [isActiveBus, setIsActiveBus] = useState(false);
  const toggleDropdownBus = () => {
    setIsActiveBus(!isActiveBus);
  };

  return (
    <>
      <TopBar />
      <div className='teamContainer'>
        <div className='team'>
          <img src='propulsion_subteam.png' />
          <div className="infoHeader">
            <h2>Propulsion</h2>
            <div className={`arrow ${isActiveProp ? "active" : ""}`} onClick={toggleDropdownProp}></div>
          </div>
          <div className={`team-info ${isActiveProp ? "active" : ""}`}>
            <p>The propulsion subteam designs and tests the rocket's chemistry and combustion system. They check for the right balance of of fuel and oxidizers as well as to see if the combustion chamber can handle the reaction that drives it all.</p>
          </div>
        </div>


        <div className='team'>
          <img src='structures_subteam.png' />
          <div className="infoHeader">
            <h2>Structures</h2>
            <div className={`arrow ${isActiveStruct ? "active" : ""}`} onClick={toggleDropdownStruct}></div>
          </div>
          <div className={`team-info ${isActiveStruct ? "active" : ""}`}>
            <p>The structures subteam assembles all components of the rocket, both mechanical and electrical, and ensures that everything fits. They also make sure that the rocket's structurally sound enough to withstand emergencies.</p>
          </div>
        </div>

        <div className='team'>
          <img src='electrical_subteam.png' />
          <div className="infoHeader">
            <h2>Electrical</h2>
            <div className={`arrow ${isActiveElec ? "active" : ""}`} onClick={toggleDropdownElec}></div>
          </div>
          <div className={`team-info ${isActiveElec ? "active" : ""}`}>
            <p>The electrical subteam handles everything electrical, whether it's the altimeter that records the final height, the accelerometer that captures important flight data, or the ignition system that sparks combustion.</p>
          </div>
        </div>

        <div className='team'>
          <img src='business_subteam.png' />
          <div className="infoHeader">
            <h2>Business</h2>
            <div className={`arrow ${isActiveBus ? "active" : ""}`} onClick={toggleDropdownBus}></div>
          </div>
          <div className={`team-info ${isActiveBus ? "active" : ""}`}>
            <p>The business subteam manages the team's finances and funding and reaches out to potential sponsors. They also handle the logistics, such as finding workspaces and transportation, in addition to maintaining the website.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Subteams;
