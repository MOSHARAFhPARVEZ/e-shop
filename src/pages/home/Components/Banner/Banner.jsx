import React from 'react'
import BannerImage from '../../../../assets/Banner/banner_one.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <div className='pt-[32px] pb-[80px]'>
            <Link to='/product'>
                <img src={BannerImage} alt="banner image" />
            </Link>
        </div>
    </>
  )
}

export default Banner