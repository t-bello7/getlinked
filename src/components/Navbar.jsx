import React, { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Button from './atoms/Button';
import MenuIcon from '../assets/icons/menu-icon.svg'

const glassStyle = "shadow-lg shadow-white-500/50 rounded bg-[#f6f0f066] backdrop-blur-sm"
const navlinks = [
  {
    url: "/",
    name: "home"
  },
  {
    url: "/contact",
    name: "donations"
  },
]
const Navbar = ({teamSectionRef}) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null)
  const handleScrollToTeam = () => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, {duration: 1, scrollTo: teamSectionRef.current});  
  }
  return (
    <div className={`bg-transparent border-b border-b-lightPurple p-5 z-10 fixed container mx-auto flex justify-between items-center md:justify-start md:gap-10`}>
      <div className="font-clashDisplay font-bold">
        <span className='font-bold text-white'>get</span><span className='text-lightPurple'>linked</span>
      </div>
      <div className="navlinks flex items-center gap-12 md:w-full">
        <Button variant='icon' iconPath={MenuIcon} onClick={() => setNavOpen(true)}/>
        <div className={navOpen? "h-fit p-5 shadow-md absolute top-0 left-0 w-full" : "hidden md:flex md:w-full md:justify-between"}>
          <ul className='h-fit md:flex md:gap-4'>
            {
              navlinks.map((item, index) => (
              <li key={index} className='mb-2 pt-2 pb-2 uppercase hover:text-slate-300' >
                <Link to={item.url}>{ item.name.charAt(0).toUpperCase() + item.name.toLowerCase().slice(1)}</Link>
              </li>
              ))
            }
            <li className='mb-2 pt-2 pb-2' onClick={handleScrollToTeam}> OUR TEAM </li>
          </ul>
          <Button name={"Donate Now"}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar