import React from 'react'
import GlobalContainer from '../../GlobalContainer'
import Logo from '../../../assets/svg/logo'

const Navbar = () => {
  return (
    <>
        <GlobalContainer>
            <div className='grid grid-cols-2 justify-between items-center py-[24px]'>
                <div>
                    <Logo />
                </div>
                <div>fds</div>
            </div>
        </GlobalContainer>
    </>
  )
}

export default Navbar