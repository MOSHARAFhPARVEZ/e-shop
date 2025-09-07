import React from 'react'
import BannerOne from '../../assets/Banner/middle_banner/BannerOne.jpg'
import BannerTwo from '../../assets/Banner/middle_banner/BannerTwo.jpg'
import GlobalContainer from '../../globalComponents/GlobalContainer'

const MiddleBanner = () => {
  return (
    <>
        <section>
          <GlobalContainer>
            <div className='grid grid-cols-[auto_auto] justify-between mt-[80px]'>
                <div>
                    <img src={BannerOne} alt="BannerOne" className='h-full w-full object-cover' />
                </div>
                <div>
                    <img src={BannerTwo} alt="BannerTwo" className='h-full w-full object-cover' />
                </div>
            </div>
          </GlobalContainer>
        </section>
    </>
  )
}

export default MiddleBanner