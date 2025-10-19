import React from 'react'
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next'
import CountDown from './CountDown';
import CommonButton from '../../../../globalComponents/CommonButton';
import DotImage from '../../../../assets/dot_img.png'

const OfferLef = () => {
    const {t} = useTranslation();
    const totalSeconds = 86400 + 43200 + 3600 + 60;
    const targetTime = Date.now() + totalSeconds * 1000;
  return (
    <>
        <div>
            <h3 className='font-poppins font-bold text-[50px] lg:text-[56px] text-black01 leading-7 lg:leading-[68px]'>{ t("Spring Sale") }</h3>
            <div className='mt-10'>
                <Countdown date={targetTime}  renderer={CountDown}/>
            </div>
            <CommonButton className="!bg-orange !py-[20px] !px-10 !border-0 mt-[72px] !rounded-[10px]" >
                <span className='font-montserrat font-bold text-[20px] leading-[30px] text-white hover:text-white'>Shop Now</span>
            </CommonButton>
            <div className='mt-20 hidden lg:block'>
                <img src={DotImage} alt="" />
            </div>
        </div>
    </>
  )
}

export default OfferLef