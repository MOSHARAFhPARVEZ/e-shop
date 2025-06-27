import React from 'react'
import GlobalContainer from '../../GlobalContainer'
import Logo from '../../../assets/svg/logo'
import SearchWithAuth from './SearchWithAuth'

const Navbar = () => {
  return (
    <>
        <GlobalContainer>
            <div className='grid grid-cols-2 justify-between items-center py-[24px]'>
                <div>
                    <Logo />
                </div>
                <div>
                  <SearchWithAuth/>
                </div>
            </div>
        </GlobalContainer>
    </>
  )
}

export default Navbar