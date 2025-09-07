import React from 'react'
import { supportData } from './support'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'


const SupportContent = () => {
  return (
    <>
        <section>
            <GlobalContainer>
                <div className='flex items-center justify-between'>
                    {
                        supportData?.map((item , index) => {
                            const Icon = item.icon;
                            return (
                                <div className='flex items-center gap-x-10' key={index}>
                                    <div className='text-black01'>
                                        <Icon />
                                    </div>
                                    <div>
                                        <h5 className='font-montserrat font-bold text-base leading-[24px] text-black01'>{item.title}</h5>
                                        <p className='font-montserrat font-normal text-base leading-[24px] text-black01'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default SupportContent