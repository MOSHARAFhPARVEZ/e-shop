import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaOpencart, FaRegUser } from 'react-icons/fa';

const NavList = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className='flex justify-between items-center gap-x-5 mb-5'>
            <div className='flex items-center gap-x-3'>
                <div className='relative'>
                    <FaOpencart size={20} />
                    <span className='absolute w-1.5 h-1.5 bg-orange -top-1 right-0 rounded-full'></span>
                </div>
                <div>
                    <h6 className='font-montserrat font-normal text-[16px] text-black01 leading-[24px]'>{t('cart')}</h6>
                    <span className='font-montserrat text-sm font-bold leading-[24px]'>$150,00</span>
                </div>
            </div>
            {/* <div className='w-[1px] h-[32px] bg-black02op25'></div> */}
            <div className='flex items-center gap-x-3'>
                <div>
                    <FaRegUser size={20} />
                </div>
                <div>
                    <h6 className='font-montserrat font-normal text-[16px] text-black01 leading-[24px]'>{t('user')}</h6>
                    <span className='font-montserrat text-sm font-bold leading-[24px]'>{t('account')}</span>
                </div>
            </div>
        </div>

        <ul className='flex flex-col gap-3'>
            <li><Link to="/product" className='font-montserrat font-bold text-base !text-black01 leading-[24px] hover:!text-orange transition-all ease-in' >{t('products')}</Link></li>
            <li><Link to="/blog" className='font-montserrat font-bold text-base !text-black01 leading-[24px] hover:!text-orange transition-all ease-in' >{t('blog')}</Link></li>
            <li><Link to="/contact" className='font-montserrat font-bold text-base !text-black01 leading-[24px] hover:!text-orange transition-all ease-in' >{t('contact')}</Link></li>
            <li><Link to="/product" className='font-montserrat font-bold text-base !text-black01 leading-[24px] flex items-center gap-x-1.5 hover:!text-orange transition-all ease-in' >{t('LIMITED_SALE')} 👋🏻</Link></li>
            <li><Link to="/product" className='font-montserrat font-bold text-base !text-black01 leading-[24px] hover:!text-orange transition-all ease-in' >{t('Best_Seller')}</Link></li>
            <li><Link to="/product" className='font-montserrat font-bold text-base !text-black01 leading-[24px] hover:!text-orange transition-all ease-in' >{t('New_Arrival')}</Link></li>
        </ul>
        
    </>
  )
}

export default NavList