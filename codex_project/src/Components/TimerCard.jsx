import { propTypesAnimate } from '@material-tailwind/react/types/components/dialog'
import React from 'react'


const TimerCard = ({time,unit}) => {
  return (

    <div className='time-small-container'>
        <h1 className='text-6xl'>{time}</h1>
        <h1 className='text-3xl'>{unit}</h1>
    </div>
  )
}

export default TimerCard;