import React from 'react'
import { Helmet } from 'react-helmet'
import GlobalContainer from '../../globalComponents/GlobalContainer'

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <GlobalContainer>
        <h1>Home</h1>
      </GlobalContainer>
    </>
  )
}

export default Home