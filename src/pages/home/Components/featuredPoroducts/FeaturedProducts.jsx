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
import { Autoplay, Navigation } from 'swiper/modules'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'

  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    }, 
    1400: {
      slidesPerView: 5,
    }, 
  };

const FeaturedProducts = () => {
  const {t} = useTranslation();

  return (
    <>
      <section>
        <GlobalContainer>
          <div className='relative mt-[30px] lg:mt-[80px] px-4 lg:px-0'>
            <div className='flex items-center justify-between mb-[48px]'>
              <h2 className='font-poppins font-semibold text-[20px] md:text-[36px] text-black01 leading-[25px] lg:leading-[46px]'>{t('Featured_Products')}</h2>
              <div className='flex items-center gap-x-4 text-orange group'>
                <Link to='/product'className='font-bold text-xs lg:text-base font-montserrat leading-[18px] lg:leading-[24px] '>
                  <span className='group-hover:text-black01'>{t('View_All')}</span>
                </Link>
                <span className='text-orange group-hover:text-black01 group-hover:translate-x-2 transition-transform duration-300'><FaArrowRightLong size='28px'/></span>
              </div>
            </div>
            <div className='absolute hidden md:block top-2/4 -translate-y-2/4 -right-5 z-30 swiper-next-btn'><NextBtn/></div>
            <div className='absolute hidden md:block top-2/4 -translate-y-2/4 -left-5 z-30 swiper-prev-btn'><PrevBtn/></div>
            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              modules={[Navigation , Autoplay]}
              navigation={{ 
                nextEl: ".swiper-next-btn",
                prevEl: ".swiper-prev-btn",
              }}
              breakpoints={breakpoints}
              loop={true}
              autoplay={{ 
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
        </GlobalContainer>
      </section>
    </>
  )
}

export default FeaturedProducts