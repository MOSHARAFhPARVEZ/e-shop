import React from 'react'
import { supportData } from './support'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'

const SupportContent = () => {
  return (
    <>
      <section className="py-2 px-3 md:px-0 md:py-6">
        <GlobalContainer>
          {/* grid layout for responsive support items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportData?.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center gap-x-4">
                  <div className="text-black01 text-xs md:text-2xl">
                    <Icon />
                  </div>
                  <div>
                    <h5 className="font-montserrat font-bold text-xs md:text-base leading-3.5 md:leading-[24px] text-black01">
                      {item.title}
                    </h5>
                    <p className="font-montserrat font-normal mt-1.5 md:mt-0 text-xs md:text-base leading-3.5 md:leading-[24px] text-black01">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </GlobalContainer>
      </section>
    </>
  )
}

export default SupportContent
