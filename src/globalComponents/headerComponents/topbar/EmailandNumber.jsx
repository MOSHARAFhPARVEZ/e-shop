import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const EmailandNumber = () => {
  return (
    <>
        <div className='flex gap-x-12 items-center'>
             <div className='flex items-center gap-x-2'>
                <div className='text-black01 text-[16px]'><CiLocationOn /></div>
                <div>
                    <p className='font-montserrat text-[14px] font-normal leading-[20px] text-black01'>123 Main Street, Anytown USA</p>
                </div>
             </div>
             <div className='w-[1px] h-[32px] bg-black02op25'></div>
             <div className='flex items-center gap-x-2'>
                <div className='text-black01 text-[16px]'><FiPhone /></div>
                <div>
                    <p className='font-montserrat text-[14px] font-normal leading-[20px] text-black01'>+1 (555) 123-4567</p>
                </div>
             </div>
        </div>
    </>
  )
}

export default EmailandNumber