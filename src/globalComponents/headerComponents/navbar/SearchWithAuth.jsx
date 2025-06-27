import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { FaOpencart , FaRegUser  } from "react-icons/fa";

const SearchWithAuth = () => {
    const {t} = useTranslation()
  return (
    <>
        <div className='flex justify-between items-center gap-x-5'>
            <div className='flex items-center justify-between border border-black02op50 px-[18px] py-[18px] rounded-[10px] w-[332px] h-[56px]'>
                <input type="search" placeholder={t('search_products ...')} className='search_products' name="" id="" />
                <CiSearch size={20} />
            </div>
            <div className='flex items-center gap-x-3'>
                <div className='relative'>
                    <FaOpencart size={28} />
                    <span className='absolute w-1.5 h-1.5 bg-orange -top-1 right-0 rounded-full'></span>
                </div>
                <div>
                    <h6 className='font-montserrat font-normal text-[16px] text-black01 leading-[24px]'>{t('cart')}</h6>
                    <span className='font-montserrat text-base font-bold leading-[24px]'>$150,00</span>
                </div>
            </div>
            <div className='w-[1px] h-[32px] bg-black02op25'></div>
            <div className='flex items-center gap-x-3'>
                <div>
                    <FaRegUser size={28} />
                </div>
                <div>
                    <h6 className='font-montserrat font-normal text-[16px] text-black01 leading-[24px]'>{t('user')}</h6>
                    <span className='font-montserrat text-base font-bold leading-[24px]'>{t('account')}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchWithAuth