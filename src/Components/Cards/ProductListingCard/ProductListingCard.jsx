import React from 'react'
import styles from './ProductListingCard.module.css'
import {Link} from 'react-router-dom'

const ProductListingCard = ({ bookData }) => {
  return (
    <div  className={`${styles['product-listing-card']}`}>
                    <div  className={`${styles['product-listing-img-container']}`}>
                       <img src={bookData.book_url} alt="product-listing-images"  className={`${styles['product-listing-image']}`}/>
                    </div>

                    <div  className={`${styles['product-listing-detail-container']}`}>
                        <h3>{bookData.book_name}</h3>
                        <p className={`${styles.autor}`}>{bookData.author_name}</p>
                        <p className={`${styles.pricing}`}>&#8377;{bookData.price}</p>
                        
                    </div>
                    <div className={`${styles['card-button']}`}>
                    <Link to={`/book-details/${bookData.id}`} className={`${styles.button}`}>Add to Cart</Link>
                    </div>
      </div>
  )

}
export default ProductListingCard