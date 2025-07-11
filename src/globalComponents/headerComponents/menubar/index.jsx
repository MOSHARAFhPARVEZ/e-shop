import React from 'react'
import GlobalContainer from '../../GlobalContainer'
import Menubarleft from './menubarLayouts/menubarleft'
import Menubarright from './menubarLayouts/menubarright'

const Menubar = () => {
  return (
    <>
        <div className='bg-orange w-full h-[72px]'>
            <GlobalContainer>
                <div className='grid grid-cols-2'>
                    <div>
                        <Menubarleft/>
                    </div>
                    <div>
                        <Menubarright/>
                    </div>
                </div>
            </GlobalContainer>
        </div>
    </>
  )
}

export default Menubar