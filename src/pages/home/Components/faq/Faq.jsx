import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import RightFaq from './components/RightFaq'
import LeftFaq from './components/LeftFaq'

const Faq = () => {
  return (
    <>
        <section className='py-16 px-4 lg:px-0 bg-white01'>
            <GlobalContainer>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-[110px]'>
                    <div className='order-1 lg:order-0 mt-4 lg:mt-0'>
                      <RightFaq/>
                    </div>
                    <div>
                      <LeftFaq/>
                    </div>
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default Faq