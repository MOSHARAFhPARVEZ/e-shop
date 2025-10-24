import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import CommonButton from '../../../../globalComponents/CommonButton'
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';

const HomeNewsletter = () => {
    const { t } = useTranslation();
  return (
    <>
        <section className='mt-5'>
            <GlobalContainer>
                <div className='lg:rounded-[25px] grid grid-cols-1 lg:grid-cols-[593px_1fr] overflow-hidden'>
                    <div className='py-6 px-5 lg:py-[114px] lg:pl-[100px]  bg-linear-to-r from-white01 to-gray from-60%'>
                        <h3 className='font-poppins font-semibold text-[26px] leading-7 lg:text-[36px] lg:leading-[46px] text-black'>{ t("Get Our Updates") }</h3>
                        <p className='font-montserrat font-normal text-base lg:text-[20px] leading-[30px] text-black01 mt-[15px] mb-[32px]'>{t("Browse our wide selection of electronics and find the perfect promo for you from newsletter.")}</p>
                        <Input className='!px-[18px] !py-[18px]  bg-white !mb-4' type="text" placeholder={t("Enter your email address ...")} />
                        <CommonButton className='!bg-orange !py-[20px] !px-10 !border-0 !rounded-[10px]'>
                            <span className='font-montserrat font-bold text-[20px] leading-[30px] text-white'>Subscribe</span>
                        </CommonButton>
                    </div>
                    <div className='py-[114px] pr-[100px] hidden lg:block bg-gray'></div>
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default HomeNewsletter