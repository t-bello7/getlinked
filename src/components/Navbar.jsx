import React, { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Button from './atoms/Button';
import MenuIcon from '../assets/icons/menu-icon.svg'

const navlinks = [
  {
    url: "/contact",
    name: "contact"
  },
]
const Navbar = ({scrollRoutes}) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null)
  const handleScroll = (event) => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, {duration: 1, scrollTo: scrollRoutes[event.target.dataset.id].current});  
  }
  return (
    <div className={`bg-transparent border-b border-b-lightPurple p-5 z-10 fixed container mx-auto flex justify-between items-center md:justify-start md:gap-10`}>
      <div className="font-clashDisplay font-bold">
        <span className='font-bold text-white'>get</span><span className='text-lightPurple'>linked</span>
      </div>
      <div className="navlinks flex items-center gap-12 md:w-full">
        <Button variant='icon' iconPath={MenuIcon} onClick={() => setNavOpen(!navOpen)}/>
        <div className={navOpen? "h-fit p-5 shadow-md absolute top-0 left-0 w-full" : "hidden md:flex md:w-full md:justify-between"}>
          <ul className='h-fit md:flex md:gap-4'>
            <li className='mb-2 pt-2 pb-2' data-id="timeline" onClick={handleScroll}> Timeline </li>
            <li className='mb-2 pt-2 pb-2' data-id="overview" onClick={handleScroll}> Overview </li>
            <li className='mb-2 pt-2 pb-2' data-id="faq" onClick={handleScroll}> FAQs </li>
            {
              navlinks.map((item, index) => (
              <li key={index} className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300' >
                <Link to={item.url}>{ item.name }</Link>
              </li>
              ))
            }
          </ul>
          <Button name="Register"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar