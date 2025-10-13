import React, { useState } from 'react'
import GlobalContainer from '../../GlobalContainer'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/svg/logo'
import { CiSearch } from 'react-icons/ci'
import { useTranslation } from 'react-i18next'
import { IoMenu } from 'react-icons/io5'
import CustomDrawer from '../../drawer'
import LangSocialCurr from '../topbar/LangSocialCurr'
import NavList from './NavList'

const MobileNavber = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className='border-b border-b-black02op25'>
            <GlobalContainer>
                <div className='grid grid-cols-[1fr_2fr_1fr] justify-between items-center py-[10px] px-[20px]'>
                    <Link to="/">
                        <Logo width={60}/>
                    </Link>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-between border border-black02op50 px-[10px] rounded-[10px] w-[180px] h-[30px]'>
                            <input type="text" placeholder={t('search_products ...')} className='mobile_search_products' name="" id="" />
                        <CiSearch size={15} />
                        </div>
                    </div>
                    <div className='flex items-center justify-end cursor-pointer'  onClick={()=>setOpen(true)}>
                        <IoMenu/>
                    </div>
                </div>
            </GlobalContainer>
        </div>
    <CustomDrawer 
        placement='left' 
        open={open} 
        setOpen={setOpen} 
        title={ <div>
                    <LangSocialCurr/>
                </div>} 
        closable={true} 
        rootClassName="custom_drawer"
    >
        <div>
            <NavList/>
        </div>
    </CustomDrawer>
    </>
  )
}

export default MobileNavber