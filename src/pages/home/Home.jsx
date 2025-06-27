import React from 'react'
import GlobalContainer from '../../globalComponents/GlobalContainer'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet-async';

const Home = () => {
const {t} = useTranslation()
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <GlobalContainer>
        <h1>{t('this_is_home_page')}</h1>
      </GlobalContainer>
    </>
  )
}

export default Home