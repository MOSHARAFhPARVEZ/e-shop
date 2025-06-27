import React from 'react'
import MenubarCategories from '../allcategories/MenubarCategories'
import ProductMenubar from '../productMenu/ProductMenubar'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Menubarleft = () => {
    const {t} = useTranslation()
  return (
    <>
        <div className='flex items-center gap-x-[80px] py-[24px]'>
            <MenubarCategories/>
            <ProductMenubar/>
            <Link to="/blog" className='font-montserrat font-bold text-base text-white leading-[24px]' >{t('blog')}</Link>
            <Link to="/contact" className='font-montserrat font-bold text-base text-white leading-[24px]' >{t('contact')}</Link>
        </div>
    </>
  )
}

export default Menubarleft