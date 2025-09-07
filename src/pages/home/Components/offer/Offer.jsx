import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import OfferLef from './OfferLef'
import OfferRight from './OfferRight'

const Offer = () => {
  return (
    <>
    <section className='mt-[80px] bg-white01 py-[64px] items-center gap-x-4'>
        <GlobalContainer>
            <div className='grid grid-cols-[auto_auto]'>
                <OfferLef/>
                <OfferRight/>
            </div>
        </GlobalContainer>
    </section>
    </>
  )
}

export default Offer