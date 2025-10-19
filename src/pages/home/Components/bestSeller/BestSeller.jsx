import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import LeftBsetSeller from './bestSellerComponents/LeftBsetSeller'
import RightBestSeller from './bestSellerComponents/RightBestSeller'

const BestSeller = () => {
  return (
    <>
        <section className='py-20'>
            <GlobalContainer>
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5'>
                    <div><LeftBsetSeller/></div>
                    <div><RightBestSeller/></div>
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default BestSeller