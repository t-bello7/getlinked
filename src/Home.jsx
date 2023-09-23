import { useRef, useEffect, useState } from 'react'
import useScreenDimensions from './components/hooks/useScreenDimensions'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbtron'
import OverviewSection from './components/OverViewSection'
import FaqSection from './components/FaqSection'
import TimelineSection from './components/TimelineSection'
import PrizeSection from './components/PrizeSection'

import './App.css'

const keyCodes = {
  UP: 38,
  DOWN: 40
}

const HomePage = () => {
  const { width: screenWidth, height: screenHeight } = useScreenDimensions();
  const jumbotronRef = useRef(null)
  const overviewSectionRef = useRef(null)
  const teamSectionRef = useRef(null)
  const containerRef = useRef(null)
  const [ isAnimating, setIsAnimating ] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(1)
  
  useEffect(() => {
    const slidesContainerArr = containerRef.current.children
    let slidesContainerLen = containerRef.current.children.length

    const onKeyDown = (event) => {
      let PRESSED_KEY = event.keyCode;
      if(PRESSED_KEY == keyCodes.UP) {
        goToPrevSlide();
        event.preventDefault();
      }
      else if(PRESSED_KEY == keyCodes.DOWN) {
        goToNextSlide();
        event.preventDefault();
      }
  
    }
    const onMouseWheel = (event) => {
      let delta = event.wheelDelta / 30 || -event.detail;
  
      if(delta < -1) {
        goToNextSlide();
      } 
      else if(delta > 1) {
        goToPrevSlide();
      }
    }
    const onSlideChangeEnd = () => {
      setIsAnimating(false);
    } 
  
    const goToSlide = (slide) =>  {
      if(!isAnimating)
      {
        setIsAnimating(true)
        setCurrentSlide(slide)
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to(window, {duration: 1, scrollTo: slide, onComplete: onSlideChangeEnd, onCompleteScope: this});  
      } 
    } 
    const goToPrevSlide = () => {
      setCurrentSlide(currentSlide - 1)
    }

    const goToNextSlide = () => {
      setCurrentSlide(currentSlide + 1)
    }
    goToSlide(slidesContainerArr[currentSlide])
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("wheel", onMouseWheel)
  },[currentSlide])
  return (
    <div ref={containerRef} className='relative bg-darkBlue text-white overflow-scroll'>
      <Navbar teamSectionRef={teamSectionRef} />
      <Jumbotron innerRef={jumbotronRef} />
      <OverviewSection innerRef={overviewSectionRef}/>
      <FaqSection />
      <TimelineSection />
      <PrizeSection />
    </div>
  )
}

export default HomePage