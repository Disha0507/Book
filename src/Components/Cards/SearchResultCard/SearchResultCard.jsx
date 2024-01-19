import React,{useContext} from 'react'
import styles from './SearchResultCard.module.css'
import { Link } from 'react-router-dom'



const SearchResultCard = ({ bookData }) => {
  return (
    <>  
    <section>
    <div className={`${styles['cart-item']}`}>
                  <div className={`${styles['cart-item-img-container']}`}>
                     <img src={bookData.book_url} alt='cart-image' className={`${styles['cart-item-img']}`} />
                  </div>

                  <div className={`${styles['cart-item-content-container']}`}>
                     <h2 className={`${styles.heading}`}>{bookData.book_name}</h2>
                     <p className={`${styles.para}`}>{bookData.author_name}</p>
                     <h3 className={`${styles.price}`}>&#8377;{bookData.price}</h3>
                     <Link to={`/book-details/${bookData.id}`} className={`${styles.btn}`}>Product Detail</Link>
                  </div>
                    </div>
    </section>
    </>
  )
}

export default SearchResultCard