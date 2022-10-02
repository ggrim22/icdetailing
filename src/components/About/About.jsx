import React from 'react'
import './About.css'
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const About = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className='container2' id='about'>
        <div className="bg3"></div>
        <div className="left">
            <span>About Me</span>
            <span>Hi, my name is Ian Cross and I am a car detailer from Pendleton Indiana. When I detail your car I think of it as my own. Any detail that I would notice about my car I would notice about yours.</span>
            <span>Testimonials</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span className='name'>
                    {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right">
            <div className="arrows">
                <img onClick={() =>(
                    selected===0?setSelected(tLength -1):
                    setSelected((prev) => prev -1)

                )} src={leftArrow} alt="" />
                <img onClick={() => (
                    selected===tLength-1 ? setSelected(0) : setSelected((prev) => prev + 1)
                )} src={rightArrow} alt="" />
            </div>
            <div className='border'></div>
            <div className='background'></div>
            <img src={testimonialsData[selected].image} alt="" />
        </div>
    </div>

  )
}

export default About