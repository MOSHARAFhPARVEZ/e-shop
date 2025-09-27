import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import RightFaq from './components/RightFaq'
import LeftFaq from './components/LeftFaq'

const Faq = () => {
  return (
    <>
        <section className='py-16 bg-white01'>
            <GlobalContainer>
                <div className='grid grid-cols-[2fr_1fr] gap-x-[110px]'>
                    <RightFaq/>
                    <LeftFaq/>
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default Faq