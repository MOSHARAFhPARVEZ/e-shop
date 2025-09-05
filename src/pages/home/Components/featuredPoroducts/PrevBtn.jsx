import React from 'react'
import { GrFormPrevious } from "react-icons/gr";

const PrevBtn = () => {
  return (
    <>
        <div className='w-[40px] h-[40px] rounded-full border border-black01 text-black01 text-[24px] hover:bg-orange hover:text-white transition-all ease-in duration-300 cursor-pointer hover:border-orange flex items-center justify-center bg-white'>
            <GrFormPrevious />
        </div>
    </>
  )
}

export default PrevBtn