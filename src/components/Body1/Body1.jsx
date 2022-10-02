import React from 'react'
import "./Body1.css"
import basic from '../../assets/basic.jpg'
import enthusiast from '../../assets/enthusiast.webp'
import maintenance from '../../assets/maintenence.jpg'
import { useState } from 'react'


const Body1 = () => {
    const [isActive, setActive] = useState('true');
    const [isBasic, setBasic] = useState('true');
    const [isMaintenance, setMaintenance] = useState('true')


    const ToggleClassEnthusiast = () => {
        setActive(!isActive);
    }

    const ToggleClassBasic = () => {
        setBasic(!isBasic)
    }

    const ToggleClassMaintenance = () => {
        setMaintenance(!isMaintenance)
    }
  return (
    <div className="container" id='packages'>
        <div className='bg2'></div>
        <div onClick={ToggleClassBasic} className={isBasic ? "basic" : 'is-flipped-basic'} id='card'>
                <div className="front">
                    <h1 className='basic-package'>Basic Package</h1>
                    <span>For the basic driver.</span>
                    <img src={basic} alt="" />
                </div>
                <div className="back">
                    <span className='head'>Basic Package</span>
                    <span className='cost'>Cost: $100</span>
                    <span className='description'>The Basic Package is your basic detail. The inside of the car gets cleaned top to bottom</span>
                    <span></span>
                </div>
        </div>
        <div onClick={ToggleClassEnthusiast} className={isActive ? "enthusiast" : 'is-flipped'} id='card'>
                <div className="front">
                    <h1 className='enthusiast-package'>Enthusiast Package</h1>
                    <span>For the ones who notice the details.</span>
                    <img src={enthusiast} alt="" />
                </div>
                <div className="back">
                    <span className='head'>Enthusiast Package</span>
                    <span className='cost'>Cost: $200</span>
                    <span className='description'>Then Enthusiast Packages gives you the most bang for your buck. It includes and outside detail and a full inside detail, along with a free tire air up.</span>
                    <span></span>
                </div>
        </div>


        <div onClick={ToggleClassMaintenance} className={isMaintenance ? "maintenence" : 'is-flipped-maintenance'} id='card'>
                <div className="front">
                    <h1 className='maintenance-package'>Maintenance Package</h1>
                    <span>For the daily driver.</span>
                    <img src={maintenance} alt="" />
                </div>
                <div className="back">
                    <span className='head'>Maintenance Package</span>
                    <span className='cost'>Cost: $150</span>
                    <span className='description'>The maintenance package gives you the most bang for your buck. It provides an outside and inside detail all for a cheap price.</span>
                    <span></span>
                </div>
        </div>
    </div>
  )
}

export default Body1