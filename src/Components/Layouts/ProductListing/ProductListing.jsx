import React from 'react'
import styles  from './ProductListing.module.css'
import '../../../index.css'
import ProductImg from '../../../assets/books-images/jungle_book.jpg'
import ProductListingCard from '../../Cards/ProductListingCard/ProductListingCard'
import { BookData } from '../../../util/BookData'
const ProductListing = () => {
  return (
    <>
    <div className={`${styles['product-listing']}`}>
        <div className='container'>
            <h2>Here are some <span className='text-primary'>books</span> that you might Like</h2>
              <div className={`${styles['listing-container']}`}>

               {BookData.slice(0,4).map((book)=>(
                      <ProductListingCard key={book} bookData={book}/>
               ))}
              
                
                 
                 
                
                </div>
        </div>

    </div>
        
    

    </>
  )
}

export default ProductListing