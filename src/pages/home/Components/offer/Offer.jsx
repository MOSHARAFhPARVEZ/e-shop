import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import OfferLef from './OfferLef'
import OfferRight from './OfferRight'

const Offer = () => {
  return (
    <>
    <section className='mt-[80px] bg-white01 py-[64px]'>
        <GlobalContainer>
            <div className='flex gap-x-4 items-center'>
                <div className='w-[35%]'>
                  <OfferLef/>
                </div>
                <div className='w-[65%]'>
                  <OfferRight/>
                </div>

            </div>
        </GlobalContainer>
    </section>
    </>
  )
}

export default Offer