import React from 'react'
import GlobalContainer from '../../globalComponents/GlobalContainer'
// import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';
import Banner from './Components/Banner/Banner';
import SupportContent from './Components/Support/SupportContent';
import FeaturedProducts from './Components/featuredPoroducts/FeaturedProducts';

const Home = () => {
// const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <GlobalContainer>
        <Banner/>
        <SupportContent/>
        <FeaturedProducts/>
      </GlobalContainer>
    </>
  )
}

export default Home