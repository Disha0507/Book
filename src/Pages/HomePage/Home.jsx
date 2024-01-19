import React from 'react'
import ShowCase from '../../Components/Layouts/Showcase/ShowCase'
import ProductListing from '../../Components/Layouts/ProductListing/ProductListing'
import Footer from '../../Components/Layouts/Footer/Footer'

const Home = () => {
  return (
    <section>
       <ShowCase/>
       <ProductListing/>
       <Footer/>

    </section>
  )
}

export default Home