import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaHandDots } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Menubarright = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className='flex items-center gap-x-[80px] py-[24px]'>
        <Link to="/product" className='font-montserrat font-bold text-base text-white leading-[24px] flex items-center gap-x-1.5' >{t('LIMITED_SALE')} 👋🏻</Link>
        <Link to="/product" className='font-montserrat font-bold text-base text-white leading-[24px]' >{t('Best_Seller')}</Link>
        <Link to="/product" className='font-montserrat font-bold text-base text-white leading-[24px]' >{t('New_Arrival')}</Link>
      </div>
    </>
  )
}

export default Menubarright