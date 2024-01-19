import React from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import SearchInputForm from '../../Components/Forms/SearchInputFont/SearchInputForm'
import styles from './BookPage.module.css'
import ProductListingAll from '../../Components/Layouts/ProductListingAll/ProductListingAll'

const BookPage = () => {
  return (
    <>
    <section>
      <Navbar darkTheme={true}/>
      <div className={`${styles['search-container']}`}>
        <h2>Find the <span>Books</span> that are you want </h2>
      <SearchInputForm darkTheme={false}/>
      </div>

      <ProductListingAll/>
      
    </section>
    
    </>
  )
}

export default BookPage