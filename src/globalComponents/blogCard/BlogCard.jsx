import React from 'react'
import { FaClock } from 'react-icons/fa6';

const BlogCard = ({pathname , ...props}) => {
    const isHomePage = pathname === '/';

    const {image , title , category , date} = props;
    const HomePageCard = () => 
        isHomePage && (
        <>
            <div className='border border-transparent hover:border-black02op25 rounded-[25px] hover:p-[52px] duration-500 transition-all ease-in w-[440px]'>
                <div className='max-h-[406px]  rounded-[25px] overflow-hidden'>
                    <img src={image} alt="Blog Image" className='w-full h-full object-cover' />
                </div>
                <div>
                    <h5 className='font-poppins font-semibold text-black01 text-[24px] leading-[30px] my-[32px]'>{title}</h5>
                    <div className='flex items-center justify-between'>
                        <span className='py-[7px] px-[12px] bg-orange rounded-[10px] font-montserrat text-base text-white leading-6'> {category} </span>
                        <div className='flex items-center gap-x-[10px] font-montserrat text-[14px] leading-[20px] font-normal text-black01'>
                            <FaClock color="#303030" size={19} />
                            <p> {date} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const BlogPageCard = () => 
        !isHomePage && (
        <>
            <div className='hover:border border-black02op25 rounded-[25px] p-[52px] duration-500 transition-all ease-in'>
                <div className='max-h-[406px] max-w-[440px] bg-amber-600 rounded-[25px] overflow-hidden'>
                    <img src={image} alt="Blog Image" className='w-full h-full object-cover' />
                </div>
                fsadfs
            </div>
        </>
    );

    
  return (
    <>
        <HomePageCard/>
        <BlogPageCard/>
    </>
  )
}

export default BlogCard