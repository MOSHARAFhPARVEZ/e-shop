import React from 'react'
import GlobalContainer from '../../globalComponents/GlobalContainer'
// import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';
import Banner from './Components/Banner/Banner';
import SupportContent from './Components/Support/SupportContent';
import FeaturedProducts from './Components/featuredPoroducts/FeaturedProducts';
import MiddleBanner from './MiddleBanner';
import NewProduct from './Components/NewProduct/NewProduct';
import Offer from './Components/offer/Offer';
import BestSeller from './Components/bestSeller/BestSeller';
import Faq from './Components/faq/Faq';
import Blog from './Components/blog/Blog';
import Brand from './Components/Brand/Brand';
import HomeNewsletter from './Components/homeNewsletter/Index';

const Home = () => {
// const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* All Components Part Start Here  */}
        <Banner/>
        <SupportContent/>
        <FeaturedProducts/>
        <MiddleBanner />
        <NewProduct />
        <Offer/>
        <BestSeller/>
        <Faq/>
        <Blog/>
        <Brand/>
        <HomeNewsletter/>
      {/* All Components Part End Here  */}

    </>
  )
}

export default Home