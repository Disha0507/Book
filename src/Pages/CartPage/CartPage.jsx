import React from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import CartItemsContainer from '../../Components/Layouts/CartItemsContainer/CartItemsContainer'
import styles from './CartPage.module.css'

const CartPage = () => {
  return (
    <>
    <section>
        <Navbar darkTheme={true}/>
        <CartItemsContainer/>
        <Footer/>
    </section>
    </>
  )
}

export default CartPage