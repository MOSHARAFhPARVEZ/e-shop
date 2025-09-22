import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BestSelerData } from './BestSelerData';
import ProductCards from '../../../../../globalComponents/productCards/ProductCard';

const LeftBsetSeller = () => {
    const {t} = useTranslation();
  return (
    <>
        <div>
            <div className='flex items-center justify-between mb-[48px]'>
              <h2 className='font-poppins font-semibold text-[36px] text-black01 leading-[46px]'>{t('Best Seller')}</h2>
              <div className='flex items-center gap-x-4 text-orange group'>
                <Link to='/product'className='font-bold text-base font-montserrat leading-[24px] '>
                  <span className='group-hover:text-black01'>{t('View_All')}</span>
                </Link>
                <span className='text-orange group-hover:text-black01 group-hover:translate-x-2 transition-transform duration-300'><FaArrowRightLong size='28px'/></span>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    BestSelerData?.slice(0,6)?.map((product)=>(
                        <ProductCards key={product.id} image={product?.image} rating={product?.rating} title={product.title} category={product.category} totalRating={product.totalRating} price={product.price} discount={product.discount} />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default LeftBsetSeller