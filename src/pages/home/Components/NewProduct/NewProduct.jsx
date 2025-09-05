import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductCards from '../../../../globalComponents/productCards/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'
import { FeaturedProductData } from '../featuredPoroducts/featuredData'
import MenubarCategories from '../../../../globalComponents/headerComponents/menubar/allcategories/MenubarCategories'


const NewProduct = () => {
    const {t} = useTranslation()
  return (
    <>
        <div className='relative mt-[80px]'>
        <div className='flex items-center justify-between mb-[48px]'>
          <h2 className='font-poppins font-semibold text-[36px] text-black01 leading-[46px]'>{t('New_Products')}</h2>
          <div className='flex items-end gap-x-4'>
            <p className='font-montserrat font-normal text-base leading-6 text-black01'>{t('Sort_by')}</p>
            <MenubarCategories icons={true} className='font-montserrat font-bold text-base text-orange leading-[24px] cursor-pointer'/>
            
          </div>
        </div>
        {/* <div className='absolute top-2/4 -translate-y-2/4 -right-5 z-30 swiper-next-btn'><NextBtn/></div>
        <div className='absolute top-2/4 -translate-y-2/4 -left-5 z-30 swiper-prev-btn'><PrevBtn/></div> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          modules={[Navigation , Autoplay]}
          navigation={{ 
            nextEl: ".swiper-next-btn",
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

export default NewProduct