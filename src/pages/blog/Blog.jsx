import React from 'react'
import { Helmet } from 'react-helmet-async'
import BlogCard from '../../globalComponents/blogCard/BlogCard'
import { BlogData } from '../home/Components/blog/BlogData'
import { useLocation } from 'react-router-dom';
import GlobalContainer from '../../globalComponents/GlobalContainer';

const Blog = () => {
  const {pathname} = useLocation();
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1>Blog</h1>

      <GlobalContainer>
        <div className='grid grid-cols-3 gap-x-12 mt-12'>
          {
              BlogData.slice(0,3).map((blog)=>(
                  <BlogCard key={blog.id} image={blog.image} pathname={pathname}/>
              ))
          }
      </div>
      </GlobalContainer>
    </>
  )
}

export default Blog