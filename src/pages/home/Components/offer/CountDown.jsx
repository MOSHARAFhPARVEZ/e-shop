
const CountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='flex gap-x-[16px] lg:gap-x-[40px]'>
        <div className='text-center'>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{days}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px] text-black01 mt-2'>Days</span>
        </div>
        <span className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>:</span>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{hours}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px] text-black01 mt-2'>Hours</span>
        </div>
        <span className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>:</span>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{minutes}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px] text-black01 mt-2'>Minutes</span>
        </div>
        <span className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>:</span>
        <div>
            <h5 className='font-poppins font-semibold text-orange text-[36px] leading-[46px]'>{seconds}</h5>
            <span className='font-montserrat font-normal text-[16px] leading-[24px] text-black01 mt-2'>Seconds</span>
        </div>
    </div>
  )
}

export default CountDown