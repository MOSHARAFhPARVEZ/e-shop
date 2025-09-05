import { Tooltip } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { getstart } from '../../utlis/GetRatings'
import { getPrice } from '../../utlis/GetDiscountPrice'
import { FaOpencart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { CiShare2 } from 'react-icons/ci'

const ProductCards = ({image , price , category , title , rating , totalRating , discount}) => {
  return (
    <>
        <div className='border group border-transparent hover:border-black02op25 pt-[24px] pr-[24px] pb-[44px] pl-[23px] rounded-[10px]'>
            <div className='relative'>
                <div className='relative w-full h-[214px] overflow-hidden rounded-[10px]'>
                    <img src={image} alt="product image" className='w-full h-full ' />
                    <div className='absolute bottom-[28px] left-2/4 -translate-x-2/4 translate-y-10 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 transition-all ease-linear duration-300'>
                        <div className='flex  items-center gap-x-[18px] '>
                            <div className='w-[50px] h-[50px] rounded-full border border-orange flex items-center justify-center bg-white text-orange hover:bg-orange transition-all ease-in duration-300 hover:text-white font-bold text-[20px] cursor-pointer' title='Add to Cart'>
                                <FaOpencart />
                            </div>
                            <div className='w-[50px] h-[50px] rounded-full border border-orange flex items-center justify-center bg-white text-orange hover:bg-orange transition-all ease-in duration-300 hover:text-white font-bold text-[20px] cursor-pointer' title='Add to Wishlist'>
                                <FiHeart />
                            </div>
                            <div className='w-[50px] h-[50px] rounded-full border border-orange flex items-center justify-center bg-white text-orange hover:bg-orange transition-all ease-in duration-300 hover:text-white font-bold text-[20px] cursor-pointer' title='share'>
                                <CiShare2 />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    discount && <div className='absolute -top-[8px] -right-[9px] px-[20px] py-[7px] w-fit bg-orange rounded-[5px]'>
                        <span className=' text-white font-montserrat text-base font-bold leading-6'>{discount}%</span>
                    </div>
                }
            </div>
            <div className='mt-10'>
                <h6 className='font-montserrat text-[14px] text-black01 leading-5 font-normal uppercase tracking-[12px] mb-4'>{category}</h6>
                {
                    
                    title?.length > 12 ? (
                        <Tooltip placement="topRight" color='#fff' title={<h6  className='font-poppins font-semibold text-black01 text-sm leading-5'>{title}</h6>}>
                            <Link to='/product' className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate block max-w-[235px] cursor-pointer group-hover:text-orange transition-all ease-in duration-300'>
                                {title}
                            </Link>
                        </Tooltip>
                    ) : (
                         <Link to='/product' className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate block max-w-[235px] cursor-pointer group-hover:text-orange transition-all ease-in duration-300'>{title}</Link>
                    )
                }

                <div className='flex items-center gap-x-2'>
                    {
                        getstart(rating)
                    }
                    <span className='font-montserrat font-normal text-base text-black01 mt-2'>({totalRating})</span>
                </div>
                
                <div className='mt-6 flex items-center gap-x-2.5'>
                    <p className='font-poppins font-semibold text-2xl leading-6 text-orange'>${getPrice(price,discount)}</p>
                    {
                        discount && (
                            <span className='font-poppins font-normal text-base leading-6 text-black01 line-through'>
                                ${price}
                            </span>
                        )
                    }
                </div>

            </div>
        </div>
    </>
  )
}

export default ProductCards