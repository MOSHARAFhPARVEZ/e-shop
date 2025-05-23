import React from 'react'
import GlobalContainer from '../../GlobalContainer'
import EmailandNumber from './EmailandNumber'
import LangSocialCurr from './LangSocialCurr'

const Topbar = () => {
  return (
    <>
      <div className='border-b border-b-black02op25'>
        <GlobalContainer>
          <div className='grid grid-cols-2 justify-between py-[22px]'>
            <div>
              <EmailandNumber/>
            </div>
            <div>
              <LangSocialCurr/>
            </div>
          </div>  
        </GlobalContainer>
      </div>
    </>
  )
}

export default Topbar