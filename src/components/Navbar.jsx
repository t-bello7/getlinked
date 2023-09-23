import React, { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Button from './atoms/Button';
import MenuIcon from '../assets/icons/menu-icon.svg'
import CloseIcon from "../assets/icons/close-icon.svg"

const navlinks = [
  {
    url: "/contact",
    name: "Contact"
  },
]
const Navbar = ({scrollRoutes}) => {
  const [navOpen, setNavOpen] = useState(false);
  const handleScroll = (event) => {
    setNavOpen(!navOpen)
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, {duration: 1, scrollTo: scrollRoutes[event.target.dataset.id].current});  
  }
  return (
    <div className={`bg-transparent border-b border-b-lightPurple p-7 z-10 fixed container mx-auto flex justify-between items-center md:justify-start md:gap-10`}>
      <div className="font-clashDisplay font-bold">
        <span className='font-bold text-white'>get</span><span className='text-lightPurple'>linked</span>
      </div>
      <Button variant='icon' iconPath={MenuIcon} onClick={() => setNavOpen(!navOpen)}/>
      <div className={`h-[60vh] p-12 absolute left-[50%] translate-x-[-50%] w-[90%] rounded-lg bg-darkBlue ${navOpen ? 'top-0' :'-top-[1000%]'}`} >
          <Button variant='icon' iconPath={CloseIcon} onClick={() => setNavOpen(!navOpen)} extraStyle="float-right"/>
          <ul className='h-fit my-12 md:flex md:gap-4'>
            <li className='mb-2 pt-2 pb-2' data-id="timeline" onClick={handleScroll}> Timeline </li>
            <li className='mb-2 pt-2 pb-2' data-id="overview" onClick={handleScroll}> Overview </li>
            <li className='mb-2 pt-2 pb-2' data-id="faq" onClick={handleScroll}> FAQs </li>
            {
              navlinks.map((item, index) => (
              <li key={index} className='mb-2 pt-2 pb-2 hover:text-slate-300' >
                <Link to={item.url}>{ item.name }</Link>
              </li>
              ))
            }
            <Button name="Register"/>
          </ul>
        </div>
    </div>
  );
}

export default Navbar