import React from 'react'
import GlobalContainer from '../../GlobalContainer'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/svg/logo'
import { IoCall } from 'react-icons/io5'
import { BsEnvelope } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { FooterData } from './data'
import visa from './../../../assets/payment/visa.png'
import mastercard from './../../../assets/payment/mastercard.png'
import applePay from './../../../assets/payment/applePay.png'
import paypal from './../../../assets/payment/paypal.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const {t} = useTranslation();
  return (
    <>
      <footer className='mt-[100px]'> 
        <GlobalContainer>
          <div className=''>
            <div className='grid grid-cols-[1fr_2fr] gap-x-4 h-full'>
              <div className='flex justify-between flex-col'>
                <Link to="/">
                  <Logo/>
                </Link>
                <div>
                  <ul>
                    <li className='flex items-center gap-x-[12px] text-black01'>
                      <div>
                        <IoCall color='#303030' />
                      </div>
                      <span className='font-montserrat text-[16px] font-normal leading-[24px]'>+1 (555) 123-4567</span>
                    </li>
                    <li className='flex items-center gap-x-[12px] text-black01 my-3'>
                      <div>
                        <BsEnvelope color='#303030' />
                      </div>
                      <span className='font-montserrat text-[16px] font-normal leading-[24px]'>information@eshop.com</span>
                    </li>
                    <li className='flex items-center gap-x-[12px] text-black01'>
                      <div>
                        <FaMapMarkerAlt color='#303030' />
                      </div>
                      <span className='font-montserrat text-[16px] font-normal leading-[24px]'>123 Main Street, Suite 105, Anytown USA</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-x-2'>
                {
                  FooterData.map((item)=> {
                    const LinkLists = item.links;
                    return (
                      <div key={item.title}>
                        <h4 className='text-popins font-semibold text-[20px] leading-[30px] text-black'>{t(item.title)}</h4>
                        {
                          LinkLists.map((data) => {
                            return(
                              <ul key={data.name} className='mt-[24px]'>
                                <li className='font-montserrat text-[16px] font-normal leading-[24px] text-black01 hover:text-orange duration-300 ease-in transition-all'>
                                  <Link to={data.link}>{t(data.name)}</Link>
                                </li>
                              </ul>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
                <div>
                  <div>
                    <h4 className='text-popins font-semibold text-[20px] leading-[30px] text-black'>Payments</h4>
                    <div className='flex items-center gap-x-3 mt-[24px]'>
                      <img src={visa} alt="payments image" />
                      <img src={mastercard} alt="payments image" />
                      <img src={applePay} alt="payments image" />
                      <img src={paypal} alt="payments image" />
                    </div>
                  </div>
                  <div className='mt-[73px]'>
                    <h4 className='text-popins font-semibold text-[20px] leading-[30px] text-black'>Follow Us</h4>
                    <ul>
                      <li className='mt-6 font-montserrat text-[16px] font-normal leading-[24px] text-black01 hover:text-orange duration-300 ease-in transition-all'>
                        <Link>
                          Twitter
                        </Link>
                      </li>
                      <li className='mt-6 font-montserrat text-[16px] font-normal leading-[24px] text-black01 hover:text-orange duration-300 ease-in transition-all'>
                        <Link>
                          Instagram
                        </Link>
                      </li> 
                      <li className='mt-6 font-montserrat text-[16px] font-normal leading-[24px] text-black01 hover:text-orange duration-300 ease-in transition-all'>
                        <Link>
                          Facebook
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-t-black02op25 mt-[40px] py-3'>
            <div className='mt-2 flex items-center justify-between text-montserrat font-normal text-[14px] leading-[24px] text-black01'>
              <div>
                <p className='hover:text-orange duration-300 ease-in transition-all'>Copyright © {currentYear} <Link to='/'>E-Shop</Link>. All Rights Reserved.</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <span className='hover:text-orange duration-300 ease-in transition-all'><Link>Privacy Policy</Link></span>
                |<span className='hover:text-orange duration-300 ease-in transition-all'><Link>Terms & Condition</Link></span>|
                <span className='hover:text-orange duration-300 ease-in transition-all'><Link>Sitemap</Link></span>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </footer>
    </>
  )
}

export default Footer