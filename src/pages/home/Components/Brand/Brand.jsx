import React from 'react'
import BrandOne from "../../../../assets/brand/brand_one.png"
import BrandTwo from "../../../../assets/brand/brand_two.png"
import BrandThree from "../../../../assets/brand/brand_three.png"
import BrandFour from "../../../../assets/brand/brand_four.png"
import BrandFive from "../../../../assets/brand/brand_five.png"
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

const Brand = () => {
  return (
    <>
        <section className='mb-[110px]'>
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
                >
                    <SwiperSlide>
                        <img src={BrandOne} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandTwo} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandThree} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFour} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFive} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandOne} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandTwo} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandThree} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFour} alt="" />
                    </SwiperSlide>       
                    <SwiperSlide>
                        <img src={BrandFive} alt="" />
                    </SwiperSlide>       
                </Swiper>
            </GlobalContainer>
        </section>
    </>
  )
}

export default Brand