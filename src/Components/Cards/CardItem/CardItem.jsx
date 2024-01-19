import React,{useContext} from 'react'
import styles from './CardItem.module.css'
import { CartContent } from '../../../App'


const CardItem = ({bookData}) => {
 const {CartItem,setCartItem}=useContext(CartContent)
  const handleRemove=()=>{
   console.log(bookData.id )
   setCartItem(CartItem.filter((item)=>item.id !== bookData.id))
  }
  return (
    <>
    
    <section>
    <div className={`${styles['cart-item']}`}>
                  <div className={`${styles['cart-item-img-container']}`}>
                     <img src={bookData.book_url} alt='cart-image'className={`${styles['cart-item-img']}`} />
                  </div>

                  <div className={`${styles['cart-item-content-container']}`}>
                     <h2 className={`${styles.heading}`}>{bookData.book_name}</h2>
                     <p className={`${styles.para}`}>{bookData.author_name}</p>
                     <h3 className={`${styles.price}`}>&#8377;{bookData.price}</h3>
                     <button onClick={handleRemove} className={`${styles.removecart}`}> Remove from Cart</button>
  
                  </div>
                    </div>
    </section>
    </>
  )
}

export default CardItem