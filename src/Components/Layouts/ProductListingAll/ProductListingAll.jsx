import React from 'react'
import styles from './ProductListingAll.module.css';
import ProductListingCard from '../../Cards/ProductListingCard/ProductListingCard';
import Footer from '../../../Components/Layouts/Footer/Footer'
import { BookData } from '../../../util/BookData';

const ProductListingAll = () => {
  //console.log(BookData)

  return (
    <>
    <section className={`${styles['productlistall-container']}`}>
        <div className={`${styles.container}`}>
          <div  className={`${styles['grid-container']}`}>
            {BookData.map((book)=>{
              return(
                <div  className={`${styles['grid-item']}`}>
                <ProductListingCard key={book} bookData={book}/>
                </div>
              )
              })}
              {/** 
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>
              <div  className={`${styles['grid-item']}`}>
              <ProductListingCard/>
              </div>*/}
          </div>
        </div>
        <Footer/>
    </section>
    
    </>
  )
}

export default ProductListingAll