import React from 'react'
import { GrFormNext } from "react-icons/gr";

const NextBtn = () => {
  return (
    <>
        <div className='w-[72px] h-[72px] rounded-full border border-black01 text-black01 text-[24px] hover:bg-orange hover:text-white transition-all ease-in duration-300 cursor-pointer hover:border-orange flex items-center justify-center '>
            <GrFormNext size={40}/>
        </div>
    </>
  )
}

export default NextBtn