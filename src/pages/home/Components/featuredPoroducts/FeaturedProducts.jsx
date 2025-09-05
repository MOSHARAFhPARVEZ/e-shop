import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import ProductCards from '../../../../globalComponents/productCards/ProductCard'
import ImageOne from '../../../../assets/ProductImage/featured_product/imageOne.webp'
import { FeaturedProductData } from './featuredData'
import { Swiper, SwiperSlide } from 'swiper/react';
import NextBtn from './NextBtn'
import PrevBtn from './PrevBtn'

const FeaturedProducts = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className='relative mt-[80px]'>
        <div className='flex items-center justify-between'>
          <h2 className='font-poppins font-semibold text-[36px] text-black01 leading-[46px]'>{t('Featured_Products')}</h2>
          <div className='flex items-center gap-x-4 text-orange group'>
            <Link to='/product'className='font-bold text-base font-montserrat leading-[24px] '>
              <span className='group-hover:text-black01'>{t('View_All')}</span>
            </Link>
            <span className='text-orange group-hover:text-black01 group-hover:translate-x-2 transition-transform duration-300'><FaArrowRightLong size='28px'/></span>
          </div>
        </div>
        <div className='absolute top-2/4 -translate-y-2/4 -right-5 z-30'><NextBtn/></div>
        <div className='absolute top-2/4 -translate-y-2/4 -left-5 z-30'><PrevBtn/></div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            FeaturedProductData?.map((product)=>(
              <SwiperSlide>
              <ProductCards key={product.id} image={product?.image} rating={product?.rating} title={product.title} category={product.category} totalRating={product.totalRating} price={product.price} discount={product.discount} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </>
  )
}

export default FeaturedProducts