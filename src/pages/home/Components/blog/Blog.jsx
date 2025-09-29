import React from 'react'
import GlobalContainer from '../../../../globalComponents/GlobalContainer'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import BlogCard from '../../../../globalComponents/blogCard/BlogCard'
import { BlogData } from './BlogData'
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const {t} = useTranslation()
    const {pathname} = useLocation();
  return (
    <>
        <section className='mt-[90px] mb-[100px]'>
            <GlobalContainer>
                <div className='flex items-center justify-between mb-[48px]'>
                    <div>
                        <h2 className='font-poppins font-semibold text-[36px] text-black01 leading-[46px]'>{t('Tech Talk')}</h2>
                        <p className='mt-6 font-montserrat font-normal text-[20px] leading-[30px] text-black01'>Stay up to date with the latest trends, reviews, and insights from our experts.</p>
                    </div>
                    <div className='flex items-center gap-x-4 text-orange group self-end'>
                        <Link to='/product'className='font-bold text-base font-montserrat leading-[24px] '>
                        <span className='group-hover:text-black01'>{t('View_All')}</span>
                        </Link>
                        <span className='text-orange group-hover:text-black01 group-hover:translate-x-2 transition-transform duration-300'><FaArrowRightLong size='28px'/></span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-x-12 mt-12'>
                    {
                        BlogData.slice(0,3).map((blog)=>(
                            <BlogCard pathname={pathname} {...blog}/>
                        ))
                    }
                </div>
            </GlobalContainer>
        </section>
    </>
  )
}

export default Blog