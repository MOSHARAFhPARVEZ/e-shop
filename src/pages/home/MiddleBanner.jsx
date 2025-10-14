import React from 'react'
import BannerOne from '../../assets/Banner/middle_banner/BannerOne.jpg'
import BannerTwo from '../../assets/Banner/middle_banner/BannerTwo.jpg'
import GlobalContainer from '../../globalComponents/GlobalContainer'

const MiddleBanner = () => {
  return (
    <>
        <section>
          <GlobalContainer>
            <div className='grid grid-cols-1 lg:grid-cols-[auto_auto] justify-between mt-5 lg:mt-[80px]'>
                <div className='mb-2 lg:mb-0'>
                    <img src={BannerOne} alt="BannerOne" className='h-full w-full object-cover' />
                </div>
                <div className='hidden lg:block'>
                    <img src={BannerTwo} alt="BannerTwo" className='h-full w-full object-cover' />
                </div>
            </div>
          </GlobalContainer>
        </section>
    </>
  )
}

export default MiddleBanner