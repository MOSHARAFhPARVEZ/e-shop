import React from 'react'

const CountDown = ({ day, hours, minutes, seconds }) => {
  return (
    <div className='flex items-center gap-x-[64px] mt-10'>
        <div className='text-center'>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{day}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px text-black01]'>Days</span>
        </div>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{hours}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px text-black01]'>Hours</span>
        </div>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{minutes}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px text-black01]'>Minutes</span>
        </div>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{seconds}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px text-black01]'>Seconds</span>
        </div>
        <div></div>
    </div>
  )
}

export default CountDown