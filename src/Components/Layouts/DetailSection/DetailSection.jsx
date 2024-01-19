import React,{useEffect, useState,useContext} from 'react'
import styles from './DetailSection.module.css'
import { CartContent, userContext } from '../../../App'

import { useParams ,useNavigate} from 'react-router-dom'
import { BookData } from '../../../util/BookData'

const DetailSection = () => {
 
  const {id}=useParams();
  const [bookData,setBookData]=useState({});
  const {CartItem,setCartItem}=useContext(CartContent)
  const navigate=useNavigate();

  const user=useContext(userContext);

  const handleAddToCart=()=>{
     if(user){
         //console.log(cart)
        setCartItem([...CartItem,bookData]);
        alert(`The book ${bookData.book_name} is added to the cart.`)
        navigate('/books')

     }
     else{
           navigate('/login')
           alert("Please Login or SignUp ")
     }
  }

  useEffect(()=>{
    let newData=BookData.filter((book)=>book.id === parseInt(id))
    
    setBookData(newData[0])

  },[])

  return (
    <>
    <section className={`${styles['detail-section-container']}`}>
        <div className={`${styles.container}`}>
            <div className={`${styles['flex-container']}`}>
                <div className={`${styles['book-img-container']}`}>
                     <img src={bookData.book_url} alt="book"/>
                </div>

                <div className={`${styles['book-detail-container']}`}>
                        <h2>{bookData.book_name}</h2>
                        <p className='text-primary'>{bookData.author_name}</p>
                        <p className={`${styles['book-description']}`}>{bookData.Book_Desciption}</p>
                        <p><b>Language:</b> {bookData.language}</p>
                        <p><b>Book Length:</b> {bookData.print_length}</p>
                        <h3>&#8377;{bookData.price}</h3>
                        <a onClick={handleAddToCart} className={`${styles['cart-button']}`}>Add To Cart</a>
                </div>

               

            </div>
        </div>
    </section>
    </>
  )
}

export default DetailSection