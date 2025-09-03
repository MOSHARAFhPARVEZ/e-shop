import { Tooltip } from 'antd'
import React from 'react'

const ProductCards = ({image , discount , category , title}) => {
  return (
    <>
        <div className='border border-transparent hover:border-black02op25 pt-[24px] pr-[24px] pb-[44px] pl-[23px] rounded-[10px] max-w-[285px]'>
            <div className='relative'>
                <div className=' w-full h-[214px] overflow-hidden rounded-[10px]'>
                    <img src={image} alt="product image" className='w-full h-full ' />
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
                    title?.length > 15 ? (
                        <Tooltip placement="topRight" color='#fff' title={<h3 className='font-poppins font-semibold text-black01 text-sm leading-5'>{title}</h3>}>
                            <h3 className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate cursor-pointer'>
                                {title}
                            </h3>
                        </Tooltip>
                    ) : (
                         <h3 className='font-poppins font-semibold text-black01 text-[20px] leading-[30px] truncate cursor-pointer'>{title}</h3>
                    )
                }
                
                
            </div>
        </div>
    </>
  )
}

export default ProductCards