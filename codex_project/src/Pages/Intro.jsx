import { useState } from 'react'
import '../assets/BROOKLYN.jpg'
import Timer from '../Components/Timer.jsx'
import timerCard from '../Components/TimerCard.jsx'
import ShareButton from '../Components/ShareButton.jsx'

function Intro() {
  const [count, setCount] = useState(0)
  const EventDate = new Date(2024,6,20,12);
  const currentTime = Date.now();
  const duration = EventDate.getTime() - currentTime; 


  return (
    <>
      <div className = " text-white intro-container block mx-auto my-0 py-[350px]  items-center font-bold ">
        <p className = "text-6xl">Brooklyn Stoop Sale</p>
        <br></br>
        <br></br>
        <br></br>
        <Timer duration={duration}/>
        <br></br>
        <br></br>
        <br></br>
        <ShareButton></ShareButton>
        
        
      </div>
    </>
  )
}

export default Intro
