import React from 'react'
import { useTranslation } from 'react-i18next';
import CommonButton from '../../../../../globalComponents/CommonButton';

const LeftFaq = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='self-end'>
        <h4 className='font-poppins font-semibold text-2xl lg:text-[36px] text-black01 leading-[30px] lg:leading-[46px]'>{t('Frequently Asked Questions')}</h4>
        <p className='mt-6 mb-5 lg:mb-[64px] font-montserrat font-normal text-base lg:text-[20px] leading-[30px] text-black01'>Questions that get asked the most by our clients. Get any burning questions?</p>
        <CommonButton className="!bg-orange !py-[20px] !px-10 !border-0 !rounded-[10px]">
          <span className='font-montserrat font-bold text-[20px] leading-[30px] text-white hover:text-white'>{t('Ask A Question')}</span>
        </CommonButton>
      </div>
    </>
  )
}

export default LeftFaq