import React from 'react'
import { OfferData } from './OfferData'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import OfferProductCard from './OfferProductCard'
import NextBtn from './NextBtn'

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
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2,
    }, 
    1400: {
      slidesPerView: 2,
    }, 
}
const OfferRight = () => {
  return (
    <>
        <div className='relative'>
            <div className='absolute top-2/4 -translate-y-2/4 -right-5 z-30 swiper-next-btn-offer hidden lg:block'><NextBtn/></div>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              modules={[ Autoplay , Navigation]}
              breakpoints={breakpoints}
              navigation={{ 
                nextEl: ".swiper-next-btn-offer",
                prevEl: ".swiper-prev-btn",
              }}
              loop={true}
              autoplay={{ 
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {
                OfferData?.map((product)=>(
                  <SwiperSlide>
                    <OfferProductCard key={product.id} image={product?.image} rating={product?.rating} title={product.title} category={product.category} totalRating={product.totalRating} price={product.price} discount={product.discount} stock={product.stock}  sold={product.sold} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
    </>
  )
}

export default OfferRight