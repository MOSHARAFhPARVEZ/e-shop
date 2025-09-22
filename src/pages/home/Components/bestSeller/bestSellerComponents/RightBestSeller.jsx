import React from 'react'
import PromoOne from '../../../../../assets/Banner/promo_banner/PromoOne.png'
import { Link } from 'react-router-dom'

const RightBestSeller = () => {
  return (
    <>
        <div>
            <Link to='/product'>
                <img src={PromoOne} alt="PromoOne" className='w-full h-auto rounded-lg' />
            </Link>
        </div>
    </>
  )
}

export default RightBestSeller