import React,{useEffect} from 'react'
import Navbar from '../../Components/Layouts/Navbar/Navbar'
import Footer from '../../Components/Layouts/Footer/Footer'
import styles from './SearchPage.module.css'
import { useLocation } from 'react-router-dom'
import { BookData } from '../../util/BookData'
import SearchResultCard from '../../Components/Cards/SearchResultCard/SearchResultCard'
import { useState } from 'react'

const SearchPage = () => {
    const location=useLocation();
    const [seacrchResult,setseacrchResult]=useState([]);
   

    useEffect(()=>{
        let searchvalue=[];
        searchvalue=BookData.filter((data)=>data.book_name.toLowerCase().includes(location.state.toLowerCase()))
       setseacrchResult(searchvalue)
        console.log(searchvalue)
    },[seacrchResult])

    
  return (
    <section>
        <Navbar darkTheme={true}/>
        <div className={`${styles['search-result-container']}`}>
            <div className={`${styles.container}`}>
                <h2>Your Search Result</h2>
              {seacrchResult.map((result)=>(
                <SearchResultCard bookData={result}/>
              ))}
            </div>

        </div>
        <Footer/>
    </section>
  )
}

export default SearchPage