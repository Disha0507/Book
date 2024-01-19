import React from 'react'
import styles from './ShowCase.module.css'
import Navbar from '../Navbar/Navbar'

import SearchInputForm from '../../Forms/SearchInputFont/SearchInputForm'

const ShowCase = () => {
  return (<>
    <section className={`${styles['showcase-container']}`}>
      
      <Navbar darkTheme={false}/>

        <div className={`${styles.overlay}`}></div>
        <div className={`${styles['showcase-content']}`}>
            <h1>Best <span className='text-primary'>Books </span>Available</h1>
            <p1 className={`${styles.p}`}>Buy quality Books at cheaper price </p1>
            <SearchInputForm darkTheme={true}/>
        </div>
        
        </section>
        
        </>
  )
}

export default ShowCase