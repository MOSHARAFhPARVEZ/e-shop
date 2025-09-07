import React from 'react'
import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next'
import CountDown from './CountDown';

const OfferLef = () => {
    const {t} = useTranslation();
  return (
    <>
        <div>
            <h3 className='font-poppins font-bold text-[56px] text-black01 leading-[68px]'>{ t("Spring Sale") }</h3>
            <Countdown date={Date.now() + 100000000000 } renderer={CountDown}/>
        </div>
    </>
  )
}

export default OfferLef