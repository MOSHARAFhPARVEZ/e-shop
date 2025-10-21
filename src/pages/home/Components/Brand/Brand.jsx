import React from 'react'
import BrandOne from "../../../../assets/brand/brand_one.png"
import BrandTwo from "../../../../assets/brand/brand_two.png"
import BrandThree from "../../../../assets/brand/brand_three.png"
import BrandFour from "../../../../assets/brand/brand_four.png"
import BrandFive from "../../../../assets/brand/brand_five.png"
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

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
}



const Brand = () => {
  return (
    <>
        <section className='mb-5 lg:mb-[110px] px-4 lg:px-0'>
            <GlobalContainer>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    modules={[ Autoplay]}
                    loop={true}
                    autoplay={{ 
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={breakpoints}
                >
                    <SwiperSlide>
                        <img src={BrandOne} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandTwo} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandThree} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFour} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFive} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandOne} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandTwo} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandThree} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFour} alt="" className='w-full '/>
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFive} alt="" className='w-full '/>
                    </SwiperSlide>       
                </Swiper>
            </GlobalContainer>
        </section>
    </>
  )
}

export default Brand