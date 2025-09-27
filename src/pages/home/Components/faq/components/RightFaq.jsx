import { Collapse } from 'antd'
import React from 'react'
import { FaqData } from './FaqData'

const RightFaq = () => {
  return (
    <>
        <div className='ting-faq'>
          {
            FaqData.map((item) => (
              <Collapse
                rootClassName='custom-collapse'
                items={[item]}
            />
            ))
          }
            
        </div>
    </>
  )
}

export default RightFaq