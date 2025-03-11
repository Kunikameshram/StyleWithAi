import React from 'react'
import Banner from './Banner'
import Deals from '../deals/Deals'
import Arrivals from '../arrivals/Arrivals'
import SingleProduct from '../product/SingleProduct'
import Follow from '../follow/Follow'
import Reviews from '../reviews/Reviews'
import Contact from '../contact/Contact'
import Cart from '../cart/Cart'

const Home = () => {
  return (
    <div >
      <Banner />
      <Deals />
      <Arrivals />
      <SingleProduct />
      
      <Reviews />
      <Follow />
      <Contact />
      <Cart />
      
    </div>
  )
}

export default Home