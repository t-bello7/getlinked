import React, { useRef, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Button from './atoms/Button';

const glassStyle = "shadow-lg shadow-white-500/50 rounded bg-[#f6f0f066] backdrop-blur-sm"
const navlinks = [
  {
    url: "/",
    name: "home"
  },
  {
    url: "/donations",
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
  useEffect(() => {
    gsap.from(navRef.current, {
      duration:1,
      // opacity:2.5,
      scale: 0.8,
      ease: "back"
    })
  }, [navRef])
  return (
    <div ref={navRef} className={`${glassStyle} p-5 z-10 fixed container max-w-[80%] mt-[3vh] mx-auto left-[50%] translate-x-[-50%] flex center justify-between items-center md:justify-start md:gap-10`}>
      <div className="logo bg-transparent">
        <img
          src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-foxy-logo-template-animal-animals-png-image_5611651.png"
          alt="logo"
          className="w-12 h-12 bg-transparent"
        />
      </div>
      <div className="navlinks flex items-center gap-12 md:w-full">
        <div className={"burger p-2 rounded-sm z-50 md:hidden"} onClick={()=>setNavOpen(!navOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" fill="#fff" ><path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"/></svg>
        </div>
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