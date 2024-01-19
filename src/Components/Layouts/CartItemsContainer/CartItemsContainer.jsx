import React from 'react'
import styles from './CartItemsContainer.module.css'
import CardItem from '../../Cards/CardItem/CardItem'
import { useContext } from 'react'
import { CartContent } from '../../../App'


const CartItemsContainer = () => {

    const { CartItem , totalAmount}=useContext(CartContent)
    

  return (
   <>
   <section>
     <div className={`${styles['cart-item-container']}`}>
        <div className={`${styles.container}`}>
            <h2>Cart</h2>
            {console.log(CartItem)}
            {CartItem.map((item)=>(
                <CardItem key={item.id} bookData={item}/>
            ))}
            
            <h2>Total Amount =&#8377;{totalAmount}{console.log(totalAmount)} </h2>
             
            
        </div>
     </div>
   </section>
   </>
  )
}

export default CartItemsContainer