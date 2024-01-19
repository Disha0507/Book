import React,{useState} from 'react'
import styles from './SearchInputForm.module.css'
import { useNavigate } from 'react-router-dom';

const SearchInputForm = (darkTheme) => {
  const [searchField,setsearchField]=useState('');
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setsearchField(e.target.value)
    console.log(e.target.value)
  }

  const redirectToSearch=()=>{
    navigate('/search',{state:searchField});
  }
  return (
    <>
    {console.log(darkTheme)}
    <div className={`${styles['search-input-container']} ${darkTheme ? `${styles['dark-box-shadow']}`:`${styles['light-box-shadow']}`}`}>
    <input type="text" 
    onChange={handleChange}
    className={`${styles['search-input']}`} placeholder='Search Book Here'></input>
    <button onClick={redirectToSearch} className={`${styles.search}`}>Search</button>
    </div>
    </>
  )
}

export default SearchInputForm